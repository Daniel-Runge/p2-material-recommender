/**
 * This function returns a HTML container for four sliders, that can take input for FelderSilverman results.
 * @author Lars Hansen & Elias Hajji
 * @returns A HTML for four sliders for input of FelderSilverman results
 */

const { updateValuesInDatabaseQuery } = require("../../sqlDbQuery");

// Get user object in function and try to fetch all values if it exists, if it doesn't show 0. 
// Hidden input for user email as there is wanted to pass the email as request body in the post request for updating the dimensions value
function createLearningStyleSliders(user) {
  const slider = `
<div class ="sliders-container">
    <h3>Felder Silverman results</h3>
    <form class="sliders" action="/style" method="POST">
        <label>Perception</label><span></span>
        <input type="range" id="Perception" max="11" min="-11" value="${user && user.Perception? user.Perception : 0 }" step="2"
             oninput="updateTextInput(this.value, 'PerceptionVal');">
        <input type="text" id="PerceptionVal" name="perception" value="${user && user.Perception? user.Perception : 0 }" class="untargetable">

        <label>Input</label><span></span>
        <input type="range" id="Input" max="11" min="-11" value="${user && user.Input? user.Input : 0 }" step="2"
            oninput="updateTextInput(this.value, 'InputVal');">
        <input type="text" id="InputVal" name="input" value="${user && user.Input? user.Input : 0 }" class="untargetable">

        <label>Processing</label><span></span>
        <input type="range" id="Processing" max="11" min="-11" value="${user && user.Processing? user.Processing : 0 }" step="2"
            oninput="updateTextInput(this.value, 'ProcessingVal' );">
        <input type="text" id="ProcessingVal" name="processing" value="${user && user.Processing? user.Processing : 0 }" class="untargetable">

        <label>Understanding</label><span></span>
        <input type="range" id="Understanding" max="11" min="-11" value="${user && user.Understanding? user.Understanding : 0 }" step="2"
            oninput="updateTextInput(this.value, 'UnderstandingVal');">
        <input type="text" id="UnderstandingVal" name="understanding" value="${user && user.Understanding? user.Understanding : 0 }" class="untargetable">
        

        <input type="submit" value="Update" name="submit" >
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
