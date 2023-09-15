import {test as baseTest} from "@playwright/test"
import AlertTestPage from "../pages/AlertTestPage"
import CalenderTestPage from "../pages/CalenderTestPage"
import DropdownDemoPage from "../pages/DropdownDemoPage"
import InputFormSubmitPage from "../pages/InputFormSubmitPage"
import SimpleFormDemoPage1 from "../pages/SimpleFormDemoPage1"
import UploadandDemoPage from "../pages/UploadandDemoPage"
import handleSingleMultiplePopUpPage from "../pages/handleSingleMultiplePopUpPage"
import JquerydropDownpage from "../pages/JquerydropDownPage"

type pages = {
    alertTestPage: AlertTestPage;
    calenderTestPage: CalenderTestPage;
    handleSingleMultiplePopUpPage: handleSingleMultiplePopUpPage;
    dropdownDemoPage: DropdownDemoPage;
    inputFormSubmitPage: InputFormSubmitPage;
    simpleFormDemoPage1: SimpleFormDemoPage1;
    uploadandDemoPage: UploadandDemoPage;
    jquerydropDownPage:JquerydropDownpage;
}

const testPages = baseTest.extend<pages>({

    alertTestPage: async({page},use)  =>{
await use(new AlertTestPage(page));
},
calenderTestPage: async({page},use)  =>{
    await use(new CalenderTestPage(page));
},
handleSingleMultiplePopUpPage: async({page},use)  =>{
        await use(new handleSingleMultiplePopUpPage(page));
},
dropdownDemoPage: async({page},use)  =>{
            await use(new DropdownDemoPage(page));
},

inputFormSubmitPage: async({page},use)  =>{
    await use(new InputFormSubmitPage(page));
},
simpleFormDemoPage1: async({page},use)  =>{
    await use(new SimpleFormDemoPage1(page));
},
uploadandDemoPage: async({page},use)  =>{
    await use(new UploadandDemoPage(page));
},

jquerydropDownPage: async({page},use)  =>{
    await use(new JquerydropDownpage(page));
}

})

export const test = testPages;
export const expect = testPages.expect;