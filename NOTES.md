# AGILE METHODOLOGIES TO KEEP IN MIND
<!-- YOU CAN MAKE UNORDERED LISTS USING + -->
### Agile asks "When do we know the most about a project? @ start? or @ completion?
### Agile's Four Rules :
    + Individuals and interactions, over processes and tools
    + Working software, over comprehensive documentation
    + Customer collaboration, over contract negotiation
    + Responding to change, over following a plan

### Implementing Agil through XP [EXtreme Programming]
    + XP is one of the most 'modern' software methodologies
    + Based on the same principles as Agile, with the key differences being that XP's focus on keeping `feedback loops` as short as possible
    + XP leverages the same tools and concepts as Agile, including backlogs full of pointed user stories, "ceremonies" such as `stand-ups` and `retros`, and planning based on `velocity` rather than intuition.

### XP's Concepts that "SUPERCHARGE" Agile Methodology [not limited to]
    + Frequent, small releases
    + "Merciless" Refactoring
    + Frequent knowledge-transfer
    + Co-location
    + Test-driven Development
    + Pair-programming
    + Continuous Integration and Continuous Deployment [ CI / CD ]

### Velocity and Estimation
    + `Velocity` in Agile is our way of making the best educated guess on how much time a project will take us. It is essentially the calculation of a person/group's rate of efficiency over a specific amount of time.


```
Velocity helps calibrate a plan by tying broad statements of effor into elapses time. Velocity is a statement of how much stuff a team or individual gets done in a time period. You should usually determine velocity by measuring how much got done in past periods, following the principle of...
```

***

# Data Modeling
    + Users
        + Name
        + [Projects]
    
    + Productivity Page*

    + Projects
        + Title
        + StartDate
        + DueDate
        + PointsDefault [100]
        + Status
        + [Tasks]

    + Tasks
        + Name
        + Description
        + StartDateDefault [Date.now]
        + DueDate
        + PointsWeight
        + Category

    •••+

App Idea: An online web application that acts as a web development helper tool. Its functionality will include the following user inputs/components:
    - 
    - project : project weight = 100 points
    - tasks to complete

App REACH Goal: allows you to toggle between 'CIVILLIAN' and 'DEVELOPER' modes