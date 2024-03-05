---
sidebar_position: 2
---

# Configure Client Script

User tracking is done via an ultra light script (< 1kb) tag added to pages of your website.
This script is served by Prisme Analytics instances at `/static/m.js`. You can consult
its content [here](https://github.com/prismelabs/analytics/blob/master/tracker/prisme.js).

This script is statically served (e.g. no templating) so configuration is done via
[data-attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).

## Configuration Options

### Prisme URL (`data-prisme-url`)

[URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
used to send event to a Prisme Analytics instance.

Example: `data-prisme-url="https://my-prisme-instance.example.com/custom/subpath"`

Default to [origin](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin)
of URL used to load the script:
```html
<!-- Events will be send to https://my-prisme-instance.example.com -->
<script src="https://my-prisme-instance.example.com/m.js"></script>
```
### Domain (`data-domain`)

Domain from which events originate. This is mainly useful if you have
multiple domains pointing to the same site.

Default is website host (e.g. `location.host` in javascript).

See https://developer.mozilla.org/en-US/docs/Web/API/Location/host

Example: `data-domain="www.example.com"`

