# ⚙️ Simple jQuery/Vanilla JS Pagination Component

A lightweight pagination component built using **Pure JavaScript** (with **jQuery** for DOM manipulation) and styled with **Tailwind CSS**.

This component is responsible for rendering the pagination controls and triggering a custom event when a page number is clicked.

## 🚀 Installation & Usage

### Prerequisites

Ensure you have the following libraries included in your project:
1.  **jQuery**
2.  **Tailwind CSS** (for styling)

### Integration

1.  **Include the Component:**
    Import or include the component's JavaScript file into your project.

2.  **HTML Structure:**
    Add a container element where you want the pagination to appear.

    ```html
    <div id="pagination-container"></div>
    ```

3.  **Initialization:**
    Create an instance of `PaginationComponent` and call the `render()` method.

    ```javascript
    import PaginationComponent from './path/to/PaginationComponent'; // Adjust path

    const $paginationContainer = $('#pagination-container');
    const pagination = new PaginationComponent($paginationContainer);

    // Example values
    let currentPage = 1;
    const lastPage = 10;

    pagination.render(currentPage, lastPage);
    ```

### Listening to Events

The component triggers a custom event named `pagination-clicked` on the container element when any pagination button (page number, Prev, or Next) is clicked.

Listen to this event to fetch new data from your server:

```javascript
$paginationContainer.on('pagination-clicked', (event, data) => {
    console.log('New page clicked:', data.page);
    // Call your function here to fetch new data 
    // using `data.page` as the new page number.

    // After successful data fetch, update the pagination view:
    // currentPage = data.page;
    // pagination.render(currentPage, lastPage); 
});
