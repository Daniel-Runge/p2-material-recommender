const { createLearningStyleSliders } = require("../pages/util/Sliders");

describe("The function generate four sliders for input by updating the values in the database", () => {
    test("Values are passed through and updated", () => {
        const actual = createLearningStyleSliders();
        expect(actual).toBe(`
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
        </script>`);
    });
})

/*
describe("Update the dimensions value in Database using user email", ()=> {
    

    test('', () => {

    })
    
})*/