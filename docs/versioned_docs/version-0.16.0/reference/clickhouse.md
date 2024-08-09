---
sidebar_position: 2
---

# ClickHouse table schemas

[ClickHouse](https://clickhouse.com) database is used as Prisme Analytics events store.
This page document schemas of Prisme Analytics tables.

## Sessions table

Sessions are stored in `sessions` table with the following schemas:

| Column name | Type | Description |
| :---------: | :--: | :---------: |
| domain | String | Domain from which events originate. |
| session_timestamp | DateTime (ALIAS) | Date and time at which session was created. |
| entry_timestamp | DateTime (ALIAS) | Same as session_timestamp. |
| entry_path | String | Path of this session's first viewed page. |
| exit_timestamp | DateTime | Date and time of this session's last viewed page. |
| exit_path | String | Path of this session's last viewed page? |
| visitor_id | String | Unique visitor identifier. |
| is_anon | Bool | Whether the visitor is anonymous. |
| session_uuid | UUID | UUIDv7 associated to this session. |
| session_id | UInt128 (ALIAS) | session_uuid as a UInt128, [use this field if you want to sort on session_uuid](https://clickhouse.com/docs/en/sql-reference/data-types/uuid). |
| operating_system | LowCardinality(String) | Visitor's Operating System (OS) |
| browser_family | LowCardinality(String) | Visitor's browser family (e.g. Chrome, Firefox, etc) |
| device | LowCardinality(String) | Visitor's device name. |
| referrer_domain | String | [Referrer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) of entry page. |
| country_code | LowCardinality(String) | [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) – two-letter country codes. (XX is used when country is unknown) |
| utm_source | String | [UTM source parameter](https://en.wikipedia.org/wiki/UTM_parameters). |
| utm_medium | String | [UTM medium parameter](https://en.wikipedia.org/wiki/UTM_parameters).|
| utm_campaign | String | [UTM campaign parameter](https://en.wikipedia.org/wiki/UTM_parameters).|
| utm_term | String | [UTM term parameter](https://en.wikipedia.org/wiki/UTM_parameters).|
| utm_content | String | [UTM content parameter](https://en.wikipedia.org/wiki/UTM_parameters).|
| version | UInt16 (ALIAS) | [Version field of VersionelCollapsingMergeTree](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/versionedcollapsingmergetree#version) |
| pageview_count | UInt16 (ALIAS version) | Number of pageviews associated to this session. |
| is_bounce | UInt16 (ALIAS) | Whether this session is a bounce or not. |

## Events tables

### Page views events

Page views events are stored in `pageviews` table with the following schemas:

| Column name | Type | Description |
| :---------: | :--: | :---------: |
| timestamp   | DateTime | Date and time at which pageview events occurred. |
| domain | String | Domain from which events originate. |
| path | String | Viewed page path. |
| visitor_id | String | The visitor ID. |
| session_uuid | UUID | The session UUIDv7. |

### Custom events

Custom events are stored in `events_custom` table with the following schemas:

| Column name | Type | Description |
| :---------: | :--: | :---------: |
| timestamp   | DateTime | Date and time at which pageview events occurred. |
| domain | String | Domain from which events originate. |
| path | String | Viewed page path. |
| visitor_id | String | A visitor ID. |
| session_uuid | UUID | The session UUIDv7. |
| name | String | Name of the event. |
| keys | Array(String) | Top level keys of event JSON object. |
| values | Array(String) | Top level values of event JSON object. |

Prisme stores custom events JSON in two columns, `keys` and `values`, instead
of a single String column to improve query performances. Unfortunately, this is
not practical, that's why we provide a `event_property` helper function.

:::tip
It is recommended to avoid nested JSON objects as it may impact performance at
query time.
:::

Let's suppose you're website send `click` events with two properties, `x` and
`y`, cursor position on X and Y axis respectively:

```js
document.addEventListener('click', (ev) => {
    window.prisme.trigger('click', { x: ev.clientX, y: ev.clientY })
})
```

You want to retrieve clicks at position (128, 64).

```SQL
SELECT * FROM prisme.events_custom
  WHERE name = 'click'
  AND event_property('x') == '128'
  AND event_property('y') == '64';
```

:::note
Properties are compared against a String value as `event_property` helper function
always returns a JSON string. You can cast value if needed using appropriate
[type conversion function](https://clickhouse.com/docs/en/sql-reference/functions/type-conversion-functions).
:::

Now let's say we want to retrieve clicks in the first 100 pixels on Y axis. We
need an integer value.

In that case, a simple cast is the more appropriate:

```SQL
SELECT * FROM prisme.events_custom
  WHERE name = 'click'
  AND toInt64OrZero(event_property('y')) <= 100;
```

If you're deeling with a more complex case, you may need more specialized JSON
functions. You can find the list of all ClickHouse JSON functions
[here](https://clickhouse.com/docs/en/sql-reference/functions/json-functions).

