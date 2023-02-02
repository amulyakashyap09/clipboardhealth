# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Format : [Ticket-id : Topic : Estimate]

Sprint Duration : 2 weeks Sprint
Total Points - 19 points

Ticket 1 - Architectural Design Discussion - 2 points
    - This story involves technical discussion over the business requirements

Ticket 2 - Database Changes - 3 points
    - Changes in existing schema, add `customAgentId` to the Facilities table

Ticket 3 - Code Changes && Unit Testing - 3 points
    - Change query in `getShiftsByFacility` i.e., replace `facilityId` by `customAgentId`
    - Add `customAgentId` to projection
    - Remove `facilityId` from projection

Ticket 4 - Unit Testing && Code Deployment - 3 points
    - Write the unit test cases
    - Test the code in Dev environment
    - Deploy the code on staging

Ticket 5 - Smoke, Regression && UAT Testing - 5 points
    - Trigger using Jenkins build

Ticket 6 - Deployment on Live && Sanity testing - 3 points
    - Deploy on production
        - Choose the most non-peak time to deploy
        - Choose the `blue/green deployment` [if infra is large], else go with
    - Perform the sanity testing