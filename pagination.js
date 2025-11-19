import $ from 'jquery'

export default class PaginationComponent {
    constructor(container) {
        this.$container = $(container);
    }

    update(current_page, last_page) {
        this.render();
    }

    render(current_page,last_page) {
        let html = `
        <nav class="flex items-center justify-center mt-4">
            <ul class="inline-flex items-center space-x-1">
        `;
        html += `
            <li>
                <a href="#"
                   data-page="${current_page - 1}"
                   class="px-3 py-1 rounded-md border border-gray-300 text-gray-700
                          hover:bg-gray-100 transition
                          ${current_page === 1 ? 'opacity-40 pointer-events-none' : ''}">
                    Prev
                </a>
            </li>
        `;
        for (let i = 1; i <= last_page; i++) {
            html += `
                <li>
                    <a href="#"
                       data-page="${i}"
                       class="px-3 py-1 rounded-md border
                              ${i === current_page
                                  ? 'bg-blue-600 text-white border-blue-600'
                                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'}
                              transition">
                        ${i}
                    </a>
                </li>
            `;
        }
        html += `
            <li>
                <a href="#"
                   data-page="${current_page + 1}"
                   class="px-3 py-1 rounded-md border border-gray-300 text-gray-700
                          hover:bg-gray-100 transition
                          ${current_page === last_page ? 'opacity-40 pointer-events-none' : ''}">
                    Next
                </a>
            </li>
        `;

        html += `
            </ul>
        </nav>
        `;

        this.$container.html(html);
        this.$container.find('[data-page]').on('click', (e) => {
            e.preventDefault();
            const page = Number($(e.target).data('page'));

            if (page < 1 || page > last_page) return;

            const newData = {
                ...this.data,
                page: page,
                current_page: page
            };

            this.$container.trigger('pagination-clicked', newData);
        });
    }
}
