(function($) {
  $(function() {
    function formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    function handleClick() {
      let date = new Date();

      $.get("./schedule.php", {
          date: formatDate(date)
        },
        function(data) {
          handleSuccess(data)
        },
        "json")
        .fail(handleError);
    }

    function handleError() {
      alert("Error");
    }

    function handleSuccess(data) {
      let output = data.map(function(value) {
        return `<td class="${value.status.active ? "success" : "info"}">
                  ${value.date}<br>
                  ${value.status.active ? "<a href='#'>" : ""}
                  ${value.status.description}
                  ${value.status.active ? "</a>" : ""}
                </td>`;
      });
      render(output);
    }

    function render(html) {
      $("#root").html(`
        <table class="table">
          <tr>
            ${html.join(" ")}
          </tr>
        </table>
      `);
    }

    $(document).on("click", "#show", handleClick);
  });
})(jQuery);
