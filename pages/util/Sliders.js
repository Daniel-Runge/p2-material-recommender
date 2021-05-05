/**
 * This function returns a HTML container for four sliders, that can take input for FelderSilverman results.
 * @author Lars Hansen & Elias Hajji
 * @returns A HTML for four sliders for input of FelderSilverman results
 */

//${user.perception} //Skal sættes ind i value når login virker... Ellers virker det ikke
//${user.Input}
//${user.Processing}
//${user.Understanding}
function createLearningStyleSliders(user) {
  const slider = `
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
</script>`;
  return slider;
}

createLearningStyleSliders();

module.exports = { createLearningStyleSliders };
