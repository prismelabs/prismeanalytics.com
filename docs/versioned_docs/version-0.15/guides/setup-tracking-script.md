# How to Setup Tracking Script

This guides shows you how to add Prisme Analytics tracking script to your
website.

Our tracking script is ultra light (< 1kB) and designed to not slow down your
website. You can consult its content
[here](https://github.com/prismelabs/analytics/blob/master/tracker).

## Prerequisites

- You have a [running Prisme Analytics instance](./self-host-prisme-docker.md).

## Step 1: Add script tag

In order to track pageviews and other metrics, you must add Prisme tracking
script on **all pages** you want to have metrics on.

Regardless of the technology used, the site must contain the following tag:

```html
<script src="https://<your-prisme-instance-hostname>/static/m.js" defer></script>
```

Depending on the tools you're using to build your website this can be as simple
as editing a single file.

:::note

Tracking script can be configured, see options
[here](../references/tracking-script.md#configuration-options)

:::

## Step 2: Test

Once you've added the script tag, check that tracking works by visiting a page
containing it.

Open your browser, navigate to the page and open developer tools (press right
click and then inspect).

![right click popup](./images/open_dev_tools.jpg)

Then go to the network tab:

![firefox devtools](./images/dev_tools.jpg)

And search for requests to
`https://<your-prisme-instance-hostname>/api/v1/events/pageviews`. You should
see a `POST` request with a `200 OK` response. On the above screenshot, Prisme
instance hostname is `app.prismeanalytics.com`.

If you received a non 200 response, it means an error occurred. In that case,
checkout relevant [troubleshoot](#troubleshoot) section.

## Troubleshoot

### 400 Bad Request

If you received a `400 Bad Request`, it means that your Prisme instance rejected
the request because it came from an unauthorized
[origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin).

This can be fixed by adding your website domain to
[Prisme origins registry](../references/server/default-mode.md#origin-registry-options).

### Other

For any other errors, check Prisme logs using
`docker logs <prisme-container-name>`.
