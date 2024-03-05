---
sidebar_position: 3
---

# Add Tracking Script

User tracking is done via an ultra light script (< 1kb) tag added to pages of
your website. You can consult its content
[here](https://github.com/prismelabs/analytics/blob/master/tracker/prisme.js).

To integrate your website with Prisme Analytics, you need to be able to update
HTML code of the website you want to track. You must simply add script tag in
`<head>...</head>` of all your HTML pages you want to track.

```html
<script
	src="https://app.prismeanalytics.com/static/m.js"
	data-prisme-verification-id="00000000-0000-0000-0000-000000000000"
	async>
</script>
```

:::note
`data-prisme-verification-id` is only necessary to verify website ownership for
Prisme Cloud users.
:::

That's it! Your done setting up Prisme Analytics, your site's visitors are now
tracked in a privacy-friendly way.

Dashboard should start showing some numbers.
