describe("glossary", () => {
    it("go to glossary page, create terms, term group", () => {

        const urn = "urn:li:dataset:(urn:li:dataPlatform:hive,cypress_logging_events,PROD)";
        const datasetName = "cypress_logging_events";
        const glossaryTerm = "CypressGlosssaryTerm";
        const glossaryTermGroup = "CypressGlosssaryGroup";
        cy.login();
        cy.goToGlossaryList();

        cy.clickOptionWithText("비지니스 용어 등록");
        cy.addViaModal(glossaryTerm, "비즈니스 용어 사전 신규 생성");

        cy.clickOptionWithText("비지니스 용어 그룹 등록");
        cy.addViaModal(glossaryTermGroup, "비즈니스 용어 사전 그룹 신규 생성");

        cy.addTermToDataset(urn, datasetName, glossaryTerm);

        cy.goToGlossaryList();
        cy.clickOptionWithText(glossaryTerm);
        cy.deleteFromDropdown();

        cy.goToDataset(urn, datasetName);
        cy.ensureTextNotPresent(glossaryTerm);

        cy.goToGlossaryList();
        cy.clickOptionWithText(glossaryTermGroup);
        cy.deleteFromDropdown();

        cy.goToGlossaryList();
        cy.ensureTextNotPresent(glossaryTermGroup);
    });
});
