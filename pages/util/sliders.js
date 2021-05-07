/**
 * This function returns a HTML container for four sliders, that can take input for FelderSilverman results.
 * @author Lars Hansen & Daniel Runge Petersen
 * @returns A HTML for four sliders for input of FelderSilverman results
 */

function createLearningStyleSliders(user) {
  const perception = user?.perception ?? 0;
  const input = user?.input ?? 0;
  const processing = user?.processing ?? 0;
  const understanding = user?.understanding ?? 0;
  const slider = `
<div class ="sliders-container">
    <h3>Felder Silverman results</h3>
    <form class="sliders" action="/style" method="POST">
        <label>Perception</label><span></span>
        <input type="range" id="perception" name="perception" max="11" min="-11" value="${perception}" step="2"
            oninput="updateTextInput(this.value, 'PerceptionVal');">
        <input type="text" id="PerceptionVal" value="${Math.abs(
          perception
        )}" class="untargetable">

        <label>Input</label><span></span>
        <input type="range" id="input" name="input" max="11" min="-11" value="${input}" step="2"
            oninput="updateTextInput(this.value, 'InputVal');">
        <input type="text" id="InputVal" value="${Math.abs(
          input
        )}" class="untargetable">

        <label>Processing</label><span></span>
        <input type="range" id="processing" name="processing" max="11" min="-11" value="${processing}" step="2"
            oninput="updateTextInput(this.value, 'ProcessingVal' );">
        <input type="text" id="ProcessingVal" value="${Math.abs(
          processing
        )}" class="untargetable">

        <label>Understanding</label><span></span>
        <input type="range" id="understanding" name="understanding" max="11" min="-11" value=${understanding} step="2"
            oninput="updateTextInput(this.value, 'UnderstandingVal');">
        <input type="text" id="UnderstandingVal" value="${Math.abs(
          understanding
        )}" class="untargetable">

        <input type="submit" value="Update">
    </form>

</div>
<script>
    function updateTextInput(val, id) {
        document.getElementById(id).value = Math.abs(val);
    }
</script>`;
  return slider;
}

createLearningStyleSliders();

module.exports = { createLearningStyleSliders };
