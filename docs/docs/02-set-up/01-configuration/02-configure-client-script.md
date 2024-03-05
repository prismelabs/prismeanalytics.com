---
pagination_prev: set-up/configuration/configure-server/server-modes
---

# Configure Client Script

User tracking is done via an ultra light script tag added to pages of your website.
This script is served by Prisme Analytics instances at `/static/m.js`. You can consult
its content [here](https://github.com/prismelabs/analytics/blob/master/internal/embedded/static/m.js).

This script is statically served (e.g. no templating) so configuration is done via
[data-attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).

## Configuration Options

### Prisme Server Scheme

URL Scheme used to send event to Prisem Analytics server.

Default: `data-prisme-scheme="https"`

### Prisme Server Domain

Domain used to send event to Prisem Analytics server.

Example: `data-prisme-domain="prisme.example.com"`

### Domain

Domain from which events originate. This is mainly useful if you have
multiple domains pointing to the same site.

Default: `data-domain={window.location.host}`

See https://developer.mozilla.org/en-US/docs/Web/API/Location/host

