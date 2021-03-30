/**
 * This function returns a HTML container for four sliders, that can take input for FelderSilverman results.
 * @author Lars Hansen
 * @returns A HTML for four sliders for input of FelderSilverman results
 */
function CreateLearningStyleSliders() {
    const slider = `
<div class ="container">
    <h1>Profile</h1>
    <p>Felder Silverman results</p>
    <!-- En form der opstiller 4 slidere med værdi fra -11 til 11 med kun ulige værdier.
    Bruger POST til /style, værdierne ligger eks. på "PerceptionVal.value" for perception værdien. -->
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

</html>`
    return slider;
}
module.exports = { CreateLearningStyleSliders };
