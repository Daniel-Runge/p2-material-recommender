/**
 * A course page body that contains the course and lecture information and a presentation of material relevant to the specific student
 * @author Daniel Runge Petersen
 * @returns HTML body for a course and its lecture material
 */
function coursehtml() {
  const content = `
    <main class="course">
        <div class="course-container">
            <h1>Overview</h1>
            <h3>Lecture 1</h3>
            <ol>
                <li>Subject</li>
                <li class="current">Subject</li>
                <li>Subject</li>
            </ol>
            <h3>Lecture 2</h3>
            <ol>
                <li>Subject</li>
                <li>Subject</li>
                <li>Subject</li>
            </ol>

        </div>
        <div class="lecture-container">
            <h1>Current Lecture Material</h1>
            <div class="lecture">
                <table>
                    <thead>
                        <tr>
                            <th>Material/link</th>
                            <th>Fit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pages 29-37 CLRS</td>
                            <td>
                                <div class="like-dislike">
                                    <input type="submit" class="dislike" value="dislike">
                                    <input type="submit" value="like">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a target="_blank" href="https://www.youtube.com/watch?v=4VqmGXwpLqc"
                                    class="material">Merge
                                    Sort</a>
                            </td>
                            <td>
                                <div class="like-dislike">
                                    <input type="submit" class="dislike" value="dislike">
                                    <input type="submit" value="like">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Covered</td>
                            <td>33%</td>
                        </tr>
                    </tfoot>
                </table>
            </div>




        </div>
    </main>

</body>

</html>`;
  return content;
}
module.exports = { coursehtml };