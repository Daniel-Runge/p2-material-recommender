const { createLearningStyleSliders } = require("../pages/util/Sliders");

describe("The function to generate four sliders for input", () => {
  test("Works without input", () => {
    const actual = createLearningStyleSliders();
    expect(actual).toBe(`
<div class ="sliders-container">
    <h3>Felder Silverman results</h3>
    <form class="sliders" action="/style" method="POST">
        <label>Perception</label><span></span>
        <input type="range" id="Perception" max="11" min="-11" value="0" step="2"
            oninput="updateTextInput(this.value, 'PerceptionVal');">
        <input type="text" id="PerceptionVal" value="0" class="untargetable">

        <label>Input</label><span></span>
        <input type="range" id="Input" max="11" min="-11" value="0" step="2"
            oninput="updateTextInput(this.value, 'InputVal');">
        <input type="text" id="InputVal" value="0" class="untargetable">

        <label>Processing</label><span></span>
        <input type="range" id="Processing" max="11" min="-11" value="0" step="2"
            oninput="updateTextInput(this.value, 'ProcessingVal' );">
        <input type="text" id="ProcessingVal" value="0" class="untargetable">

        <label>Understanding</label><span></span>
        <input type="range" id="Understanding" max="11" min="-11" value=0 step="2"
            oninput="updateTextInput(this.value, 'UnderstandingVal');">
        <input type="text" id="UnderstandingVal" value="0" class="untargetable">

        <input type="submit" value="Update">
    </form>

</div>
<script>
    function updateTextInput(val, id) {
        document.getElementById(id).value = val;
        console.log("The value of " + id + " is: " + val);
    }
</script>`);
  });
});
