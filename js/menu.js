<script>
  // Toggle mobile links: adds/removes the "open" class
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('menu-toggle');
    const links = document.getElementById('myLinks');

    if (!btn || !links) return;

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      links.classList.toggle('open');
    });

    // If user resizes to desktop, ensure dropdown is closed
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        links.classList.remove('open');
      }
    });
  });
</script>
