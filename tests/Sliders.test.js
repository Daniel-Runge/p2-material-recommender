const { CreateLearningStyleSliders } = require("../pages/util/Sliders");

describe("The function to generate four sliders for input", () => {
    test("Works without input", () => {
        const actual = CreateLearningStyleSliders();
        expect(actual).toBe(`
<div class ="container">
    <h1>Profile</h1>
    <p>Felder Silverman results</p>
    <form action="/style" method="POST">
        <label>Perception</label><br>
        <input type="range" id="Perception" max="11" min="-11" value="0" step="2"
            onchange="updateTextInput(this.value, 'PerceptionVal');"><br>
        <input type="text" id="PerceptionVal" value="0"><br><br>

        <label>Input</label><br>
        <input type="range" id="Input" max="11" min="-11" value="0" step="2"
            onchange="updateTextInput(this.value, 'InputVal');"><br>
        <input type="text" id="InputVal" value="0"><br><br>

        <label>Processing</label><br>
        <input type="range" id="Processing" max="11" min="-11" value="0" step="2"
            onchange="updateTextInput(this.value, 'ProcessingVal' );"><br>
        <input type="text" id="ProcessingVal" value="0"><br><br>

        <label>Understanding</label><br>
        <input type="range" id="Understanding" max="11" min="-11" value=0 step="2"
            onchange="updateTextInput(this.value, 'UnderstandingVal');"><br>
        <input type="text" id="UnderstandingVal" value="0"><br><br>

        <input type="submit" value="Submit"><br>
    </form>
 <button onclick="myfunction()" id="button">
            button 1
        </button>
</div>
<script>
    function updateTextInput(val, id) {
        document.getElementById(id).value = val;
        console.log("The value of " + id + " is: " + val);
    }
</script>

</html>`);
    });
})
