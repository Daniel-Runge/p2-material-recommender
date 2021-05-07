function abouthtml() {
  const html = `
    <main class="about">
        <div class="about-container">
            <h1>About the project</h1>
            <p>More information about the project will be available later.</p>
        </div>
        <div class="right-side">
            <section class="help-block">
                <h3>Report</h3>
                <p>Add a download link for PDF download?.</p>
            </section>
            <section class="help-block">
                <h3>Github</h3>
                <p>Add a link to GitHub repository?.</p>
            </section>
        </div>
    </main>
</body>

</html>`;
  return html;
}

module.exports = { abouthtml };
