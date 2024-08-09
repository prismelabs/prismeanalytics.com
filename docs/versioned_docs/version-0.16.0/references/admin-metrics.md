# Admin metrics

This document list and explain metrics exposed by Prisme instances. If you're not
self-hosting Prisme you're may be looking for [analytics metrics](./analytics-metrics.md).

Admin metrics are exposed under [`http://<PRISME_ADMIN_HOSTPORT>/metrics`](./server/default-mode.md#host-port)

## HTTP server

This section lists metrics related to HTTP requests received on the standard
interface. Requests processed by admin server don't impact these metrics.

### Active requests (gauge) `http_active_requests`

Number of requests currently being processed.

### Total requests (counter) `http_requests_total`

Total number of requests processed.

Labels:
* path
* method
* status

### Requests duration (histogram) `http_requests_duration_seconds`

An histogram of HTTP requests duration in seconds.

Labels:
* path
* method
* status

Buckets:
* 0.001
* 0.005
* 0.01
* 0.05
* 0.1
* 0.2
* 0.3
* 0.4
* 0.5
* 1
* 5
* 10

## Event storage

### Dropped batch (counter) `eventstore_batch_dropped_total`

Total number of dropped batch.

Labels:
* type (`pageview` or `custom`)

### Send batch retry (counter) `eventstore_batch_retry_total`

Total number of retries to send a batch.

Labels:
* type (`pageview` or `custom`)

### Total events (counter) `eventstore_events_total`

Total number of events sent to ClickHouse.

Labels:
* type (`pageview` or `custom`)

### Total events dropped from ring buffers (counter) `eventstore_ring_buffers_dropped_events_total`

Total number of events dropped by non blocking ring buffer.

Labels:
* type (`pageview` or `custom`)

### Batch send duration (histogram) `eventstore_send_batch_duration_seconds`

Histogram of duration (in seconds) to send a batch.

Labels:
* type (`pageview` or `custom`)

Buckets:
* 0.1
* 0.2
* 0.3
* 0.4
* 0.5
* 1
* 5
* 10
* 60
* 120

### Batch size (histogram) `eventstore_batch_size_events`

Histogram of size of batches sent.

Labels:
* type (`pageview` or `custom`)

Buckets:
* 1
* 10
* 100
* 1 000
* 10 000
* 25 000
* 50 000
* 100 000

## Sessions storage

### Active sessions (gauge) `sessionstorage_active_sessions`

Number of active sessions stored in memory.

### Total sessions (counter) `sessionstorage_sessions_total`

Total number of sessions processed.

Labels:
* type (`inserted` or `expired`)

### Sessions pageviews (histogram) `sessionstorage_sessions_pageviews`

An histogram of pageviews per sessions.

Buckets:
* 1
* 2
* 3
* 5
* 10
* 15
* 25
* 30
* 50
* 100

### Session miss (counter) `sessionstorage_get_session_misses`

Number of sessions that wasn't found in memory.

## IP geolocator

### Total search (counter) `ipgeolocator_search_total`

Total number of IP geolocations done.

Labels:
* country_code
* ip_version

