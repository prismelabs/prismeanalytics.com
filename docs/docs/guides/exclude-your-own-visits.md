---
---

# Exclude your own visits

This guides explains how to exclude visits from your browser.

## Step 1: Access your browser console

If you aren’t sure how to get to your console in your browser, here’s how you do
it in all major browsers.

### Chrome / Brave

☰ > More Tools > Developer Tools Keyboard: Ctrl + Shift + I (Windows/Linux) or
Command + Option + I (Mac)

Then select the Console tab if it’s not already selected.

### Firefox

☰ > More tools > Web Developer Tools > Web Console Keyboard: Ctrl + Shift + J (Windows/Linux) or
Command + Shift + J (Mac)

Then select the Console tab if it’s not already selected.

### Microsoft Edge

Menu: Tools > Developer > Javascript Console Keyboard: Ctrl + Shift + J
(Windows/Linux) or Command + Shift + J (Mac)

Then select the Console tab if it’s not already selected.

### Safari

In preferences, ensure ‘Show develop menu’ in menubar is checked.

Menu: Menu > Develop > Show Web Inspector Keyboard: Ctrl + Shift + I
(Windows/Linux) or Command + Option + I (Mac).
Then select the Console tab if it’s not already selected.

## Step 2: Disable Prisme tracking.

Note: We store the option you've selected in your browser's local storage, as
the data stored in there doesn't have an expiration date and will persist even
if you close the browser or reset/shutdown your PC. You can clear the data
stored in local storage by clearing your browser's cache.

```js
localStorage["prismeAnalytics.tracking.enable"] = "false"
```

If you wish to turn this off later, use:

```js
delete localStorage["prismeAnalytics.tracking.enable"]
```

