import SelectPanelType from "./images/select_panel_type.png"

# How to create a custom dashboard

Custom dashboards enable you to create a tailored view of your data,
highlighting the metrics and KPIs that matter most to your organization. This
guides shows you how to create a custom dashboard in Prisme Analytics.

## Step 1: Create an empty dashboard

On the side bar, click on the `dashboard` entry, you should see the following
page:

![screenshot of dashboard page](./images/dashboards_page.png)

Then, click on the `New` dropdown button and then select the `New dashboard`
entry. This create an empty dashboard:

![screenshot of new empty dashboard page](./images/empty_dashboard_page.png)

## Step 2: Add panels / visualization

Dashboards are useless if they're empty, we must add some content to it. Click
`+ Add visualization` button to navigate to edit panel page.

![screenshot of edit panel page](./images/new_panel_page.png)

This is page is made of 4 parts:

- Preview: view of panel in real time as you edit options
- Query builder: Graphical builder for easily querying data from the
  [ClickHouse](https://clickhouse.com) database
- Panel type: Dropdown menu with dozens of panels type
- Panel options: Standard and specific panel options

![annotated screenshot of edit panel page](./images/annotated_new_panel_page.png)

For this guide, we add a simple text panel that don't query any analytics data
for sake of simplicity. Checkout
[How to track scroll depth](./track-scroll-depth.md#step-6-create-a-new-panel)
guide to see a more realistic example.

Set panel type to Text.

<img alt="screenshot of panel type dropdown" src={SelectPanelType} height="600" />

Then explore and edit options until you're satisfied of the result:

![screenshot of text panel edit page](./images/simple_text_panel_edit_page.png)

Once you're satisfied, click on the blue apply button.

## Step 3: Resize and move panel

Once your panels are ready, you can resize and move them:

<div style={{display: "flex", flexDirection: "row", gap: "4px"}}>
![screenshot of text panel being resized](./images/resize_panel.png)

![screenshot of text panel being moved](./images/move_panel.png)

</div>

Finally, when your dashboard is ready, it is time to save it.

## Step 4: Save dashboard

Click on the save icon in the top bar.

![screenshot of custom dashboard being saved](./images/custom_dashboard_save.png)

Then sets dashboard name, description, destination folder and click save.

:::note

Don't save dashboards in `Prisme Analytics` folder as it is reserved for
built-ins dashboards.

:::

![screenshot of save dashboard dialog](./images/save_dashboard_dialog.png)

Finally, your dashboard is now visible on dashboards page:

![screenshot of dashboards page with new custom dashboard](./images/dashboards_page_with_custom_dashboard.png)

That's it, you've successfully created a custom dashboard!
