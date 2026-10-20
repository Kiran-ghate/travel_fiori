sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"travel/test/integration/pages/ZFE_C_TRAVEL_PROCESSOR_MList.gen",
	"travel/test/integration/pages/ZFE_C_TRAVEL_PROCESSOR_MObjectPage.gen",
	"travel/test/integration/pages/Zfe_C_Booking_Processor_MObjectPage.gen"
], function (JourneyRunner, ZFE_C_TRAVEL_PROCESSOR_MListGenerated, ZFE_C_TRAVEL_PROCESSOR_MObjectPageGenerated, Zfe_C_Booking_Processor_MObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('travel') + '/test/flp.html#app-preview',
        pages: {
			onTheZFE_C_TRAVEL_PROCESSOR_MListGenerated: ZFE_C_TRAVEL_PROCESSOR_MListGenerated,
			onTheZFE_C_TRAVEL_PROCESSOR_MObjectPageGenerated: ZFE_C_TRAVEL_PROCESSOR_MObjectPageGenerated,
			onTheZfe_C_Booking_Processor_MObjectPageGenerated: Zfe_C_Booking_Processor_MObjectPageGenerated
        },
        async: true
    });

    return runner;
});

