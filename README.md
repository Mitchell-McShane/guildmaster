# Guildmaster

Guildmaster is a browser-based fantasy adventurer guild management
simulator built using JavaScript, React, Express and MongoDB.

The player takes on the role of a guildmaster, recruiting adventurers,
assembling parties, assigning quests and managing the guild's resources
and reputation.

## Project Brief

The purpose of this project is to develop a full-stack JavaScript
application while focusing on programming fundamentals, object-oriented
programming, game logic and database integration.

The project prioritises JavaScript functionality over complex HTML
and CSS design.

## Learning Objectives

- Refresh modern JavaScript fundamentals.
- Practise object-oriented programming.
- Work with arrays, objects and higher-order functions.
- Develop reusable and modular JavaScript code.
- Implement algorithms and game simulation systems.
- Write automated unit tests.
- Build a RESTful API using Express.
- Manage persistent data using MongoDB.
- Build an interactive frontend using React.
- Practise Git branching and pull requests.

## Technology Stack

### Currently Implemented

- JavaScript (ES6+)
- Node.js
- Node.js Test Runner
- Git and GitHub

### Planned Technologies

- React
- Express.js
- MongoDB
- HTML and CSS

## Minimum Viable Product (MVP)

The player should be able to:

- [x] Create and name a guild.
- [x] View guild statistics.
- [x] Recruit randomly generated adventurers.
- [x] View adventurer attributes and classes.
- [ ] View available quests.
- [ ] Assemble adventurer parties.
- [ ] Assign parties to quests.
- [ ] Simulate quest outcomes.
- [ ] Receive gold, experience and reputation from quests.
- [x] Level up adventurers.
- [ ] Save and load guild progress.

Completed features currently operate at the JavaScript game logic level. Player-facing interactions will be introduced during frontend development.

## Current Features

### Guild Management

- Guild creation and custom naming.
- Starting balance of 500 gold.
- Gold management.
- Guild reputation and rank tracking.
- Guild roster capacity management.
- Adventurer recruitment.
- Duplicate recruitment prevention.
- Insufficient funds and full roster checks.

### Adventurer System

- Four adventurer classes.
- Six core character attributes.
- Class-specific starting attributes.
- Randomly generated adventurer names and classes.
- Unique adventurer IDs.
- Class-specific recruitment costs.
- Adventurer availability tracking.

### Character Progression

- Experience point management.
- Automatic levelling.
- Increasing experience requirements.
- Multiple level-ups from a single experience reward.
- Experience carryover between levels.
- Class-specific attribute growth.
- Experience progress percentage.
- Remaining experience calculations.

### Automated Testing

- Node.js built-in Test Runner.
- 29 automated unit tests.
- Adventurer system tests.
- Guild management tests.
- Adventurer generation tests.
- Random utility function tests.

## Adventurer Classes

Guildmaster currently features four adventurer classes, each with unique starting attributes, recruitment costs and attribute growth.

| Class | Specialisation | Recruitment Cost |
|---|---|---:|
| Warrior | Strength, defence and vitality | 100 Gold |
| Mage | Intelligence and magical abilities | 150 Gold |
| Rogue | Agility and precision | 125 Gold |
| Cleric | Support, intelligence and vitality | 125 Gold |

### Starting Attributes

| Attribute | Warrior | Mage | Rogue | Cleric |
|---|---:|---:|---:|---:|
| Strength | 15 | 4 | 10 | 6 |
| Defence | 15 | 5 | 6 | 10 |
| Intelligence | 4 | 22 | 6 | 16 |
| Agility | 7 | 8 | 20 | 5 |
| Vitality | 14 | 8 | 6 | 15 |
| Luck | 5 | 13 | 12 | 8 |
| **Total** | **60** | **60** | **60** | **60** |

Each adventurer starts at level 1 with zero experience and gains 12 additional attribute points per level based on their class.

Attribute values, recruitment costs and experience requirements are subject to future gameplay balancing.

## Stretch Goals

- Additional adventurer classes.
- Adventurer traits and personalities.
- Equipment and item management.
- Injuries and recovery.
- Guild upgrades.
- Guild ranking system.
- Procedurally generated quests.
- Random world events.
- In-game calendar.
- Quest history and statistics.
- Achievements.

## Development Roadmap

- [x] Phase 1 - Project setup
- [x] Phase 2 - Core JavaScript
- [ ] Phase 3 - Game engine
- [ ] Phase 4 - JavaScript testing
- [ ] Phase 5 - Express backend
- [ ] Phase 6 - MongoDB integration
- [ ] Phase 7 - React frontend
- [ ] Phase 8 - Full-stack integration
- [ ] Phase 9 - Advanced gameplay
- [ ] Phase 10 - Project completion

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Running the Project

Run the following command from the project root:

```bash
npm start
```

### Development Mode

```bash
npm run dev
```

### Running Tests

```bash
npm test
```

## Project Status

**Current Version:** v0.1.0

**Completed Phases:** 2 of 10

**Automated Tests:** 29 passing

Phase 1 (Project Setup) and Phase 2 (Core JavaScript) are complete.

The foundational guild management, adventurer recruitment and character progression systems have been implemented and tested.

The next development phase will focus on building the core game engine, including quest generation, party formation, quest simulation, reward distribution and day progression.

The frontend, backend and database systems will be introduced once the core game engine is established.