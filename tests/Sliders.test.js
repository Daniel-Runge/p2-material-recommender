const { createLearningStyleSliders } = require("../pages/util/Sliders");

describe("The function to generate four sliders for input", () => {

const user = {
    perception: 11,
    input: -5,
    processing: 7,
    understanding: 9
}


test("Works with null input", () => {
    const actual = createLearningStyleSliders(user);
    expect(actual).toBe(`
<div class ="sliders-container">
    <h3>Felder Silverman results</h3>
    <form class="sliders" action="/style" method="POST">
        <label>Perception</label><span></span>
        <input type="range" id="perception" name="perception" max="11" min="-11" value="11" step="2"
            oninput="updateTextInput(this.value, 'PerceptionVal');">
        <input type="text" id="PerceptionVal" value="11" class="untargetable">

        <label>Input</label><span></span>
        <input type="range" id="input" name="input" max="11" min="-11" value="-5" step="2"
            oninput="updateTextInput(this.value, 'InputVal');">
        <input type="text" id="InputVal" value="5" class="untargetable">

        <label>Processing</label><span></span>
        <input type="range" id="processing" name="processing" max="11" min="-11" value="7" step="2"
            oninput="updateTextInput(this.value, 'ProcessingVal' );">
        <input type="text" id="ProcessingVal" value="7" class="untargetable">

        <label>Understanding</label><span></span>
        <input type="range" id="understanding" name="understanding" max="11" min="-11" value=9 step="2"
            oninput="updateTextInput(this.value, 'UnderstandingVal');">
        <input type="text" id="UnderstandingVal" value="9" class="untargetable">

        <input type="submit" value="Update">
    </form>

</div>
<script>
    function updateTextInput(val, id) {
        document.getElementById(id).value = Math.abs(val);
    }
</script>`);
  });

  test("Works without input", () => {
    const actual = createLearningStyleSliders();
    expect(actual).toBe(`
<div class ="sliders-container">
    <h3>Felder Silverman results</h3>
    <form class="sliders" action="/style" method="POST">
        <label>Perception</label><span></span>
        <input type="range" id="perception" name="perception" max="11" min="-11" value="0" step="2"
            oninput="updateTextInput(this.value, 'PerceptionVal');">
        <input type="text" id="PerceptionVal" value="0" class="untargetable">

        <label>Input</label><span></span>
        <input type="range" id="input" name="input" max="11" min="-11" value="0" step="2"
            oninput="updateTextInput(this.value, 'InputVal');">
        <input type="text" id="InputVal" value="0" class="untargetable">

        <label>Processing</label><span></span>
        <input type="range" id="processing" name="processing" max="11" min="-11" value="0" step="2"
            oninput="updateTextInput(this.value, 'ProcessingVal' );">
        <input type="text" id="ProcessingVal" value="0" class="untargetable">

        <label>Understanding</label><span></span>
        <input type="range" id="understanding" name="understanding" max="11" min="-11" value=0 step="2"
            oninput="updateTextInput(this.value, 'UnderstandingVal');">
        <input type="text" id="UnderstandingVal" value="0" class="untargetable">

        <input type="submit" value="Update">
    </form>

</div>
<script>
    function updateTextInput(val, id) {
        document.getElementById(id).value = Math.abs(val);
    }
</script>`);
  });

  test("Works with null input", () => {
    const actual = createLearningStyleSliders(null);
    expect(actual).toBe(`
<div class ="sliders-container">
    <h3>Felder Silverman results</h3>
    <form class="sliders" action="/style" method="POST">
        <label>Perception</label><span></span>
        <input type="range" id="perception" name="perception" max="11" min="-11" value="0" step="2"
            oninput="updateTextInput(this.value, 'PerceptionVal');">
        <input type="text" id="PerceptionVal" value="0" class="untargetable">

        <label>Input</label><span></span>
        <input type="range" id="input" name="input" max="11" min="-11" value="0" step="2"
            oninput="updateTextInput(this.value, 'InputVal');">
        <input type="text" id="InputVal" value="0" class="untargetable">

        <label>Processing</label><span></span>
        <input type="range" id="processing" name="processing" max="11" min="-11" value="0" step="2"
            oninput="updateTextInput(this.value, 'ProcessingVal' );">
        <input type="text" id="ProcessingVal" value="0" class="untargetable">

        <label>Understanding</label><span></span>
        <input type="range" id="understanding" name="understanding" max="11" min="-11" value=0 step="2"
            oninput="updateTextInput(this.value, 'UnderstandingVal');">
        <input type="text" id="UnderstandingVal" value="0" class="untargetable">

        <input type="submit" value="Update">
    </form>

</div>
<script>
    function updateTextInput(val, id) {
        document.getElementById(id).value = Math.abs(val);
    }
</script>`);
  });
});
