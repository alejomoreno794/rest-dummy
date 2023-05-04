# 1. Packaging guidelines
## Context
As an input for the implementation stage, a basic guideline is required for the packaging of the billing module with the aim of allowing us to develop the different components in an orderly and homogeneous manner in terms of their structure and nomenclature, thereby allowing so that there is greater maintainability, auditing and evolutionary capacity.
## Structure
![packaging](./images/packaging-guideline.png)
## Decision
In accordance with the proposal of [scaffolding](https://docs.google.com/spreadsheets/d/1vUgMvqULUDGM4gNR2LOaeGdxIwLTkq5vjgF4-WOnT-Q/edit#gid=648883864) presented for the java language, the following structural composition of folders:
- Application.
- Domain.
- Infrastructure.
  This main categorization is distinguished by corresponding to the three main layers defined in [clean architectures](https://khalilstemmler.com/articles/software-design-architecture/domain-driven-design-vs-clean-architecture/).
  Similarly, in subsequent sections there will be a deeper emphasis on what constitutes each of these three categories.
### Application
The following components will be located in the Application folder:
- Command (commands): refers to the data transfer objects that seek to modify the state of the application.
- Exception (application layer exceptions)
- Port (ports): interfaces that allow communication to and from the application layer.
- Query (consultations): refers to data transfer objects whose purpose is to consult the status of the application.
- Service (application service): these are functional characteristics devoid of business logic and whose main mission is to orchestrate calls to adapters and pass control to domain entities.
### Domain
The following components will be located in the domain folder:
- Entities (entities): it is proposed to create at the same level all the classes of entities that are in the domain.
- Events (events).
- Exceptions (domain exceptions)
- Service (domain services): that contain logic external to the entities per se, or that belong to two or more entities.
- Valueobjects (value objects): it is also proposed to include enums in this folder.
### Infrastructure
The infrastructure folder will be subdivided into the following components:
- Ingoing: refers to input adapters, ie consumers, controllers, handlers and jobs.
- Outgoing: Refers to outgoing adapters, such as providers, producers, and repositories.
  Basically this distribution of adapters will allow us to connect with fury and non-fury services.
### Nomenclature
- As a folder naming structure, flatcase is proposed, which proposes to write all the words together, always keeping the lowercase letter.
- All names must be written in English.
- The naming of the files must be Capital camel case, that is, their first letter must be capitalized and each new word must also have a capital letter.
- The use of suffixes or prefixes such as interface, class, enum or others should be avoided when naming the files.