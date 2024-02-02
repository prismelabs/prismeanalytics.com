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
