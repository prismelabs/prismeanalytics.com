---
sidebar_position: 2
---

# ClickHouse Table Schemas

[ClickHouse](https://clickhouse.com) database is used as Prisme Analytics events store.
This page document schemas of Prisme Analytics tables.

## Events Tables

### Page Views Events

Page Views Events are stored in a `events_pageviews` table with the following schemas:

| Column name | Type | Description |
| :---------: | :--: | :---------: |
| timestamp   | DateTime | Date and time at which pageview events occurred. |
| domain | String | Domain from which events originate. |
| path | String | Viewed page path. |
| operating_system | LowCardinality(String) | User's Operating System (OS). |
| browser_family | LowCardinality(String) | User's browser family (Chrome, Firefox, etc) |
| device | LowCardinality(String) | User's device name. |
| referrer_domain | String | [Referrer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) of the viewed page. |
| country_code | LowCardinality(String) | [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) – two-letter country codes. (`XX` is used when country is unknown) |

### Custom Events

Custom Events are stored in a `events_custom` table with the following schemas:

| Column name | Type | Description |
| :---------: | :--: | :---------: |
| timestamp   | DateTime | Date and time at which custom events occurred. |
| domain | String | Domain from which events originate. |
| path | String | Path to page that triggered the event. |
| name | String | Name of the event. |
| keys | Array(String) | Top level keys of event JSON object. |
| values | Array(String) | Top level values of event JSON object. |

Prisme stores custom events JSON in two columns, `keys` and `values`, instead
of a single String column to improve query performances. Unfortunately, this is
not practical, that's why we provide a `event_property` helper function.

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
always returns a JSON string.
:::

Now let's say we want to retrieve clicks in the first 100 pixels on Y axis. We
need an integer value.

In that case, a simple cast is the more appropriate:

```SQL
SELECT * FROM prisme.events_custom
  WHERE name = 'click'
  AND toInt64OrZero(event_property('y')) <= 100;
```

If you're deeling with a more complex case, you may need more specialized JSON functions.
You can find the list of all ClickHouse JSON functions [here](https://clickhouse.com/docs/en/sql-reference/functions/json-functions).

