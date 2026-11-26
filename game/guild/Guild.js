export class Guild {
    constructor(name) {
        this.name = name;
        this.gold = 500;
        this.reputation = 0;
        this.rank = "F";
        this.currentDay = 1;
        this.maxAdventurers = 5;
        this.adventurers = [];
    }

    getSummary() {
        return {
            name: this.name,
            gold: this.gold,
            reputation: this.reputation,
            rank: this.rank,
            currentDay: this.currentDay,
            adventurers: this.adventurers.length,
            maxAdventurers: this.maxAdventurers,
            availableSlots: this.getAvailableSlots()
        };
    }

    addAdventurer(adventurer) {
        if (this.adventurers.length >= this.maxAdventurers) {
            return false;
        }

        this.adventurers.push(adventurer);
        return true;
    }

    getAdventurers() {
        return [...this.adventurers];
    }

    addGold(amount) {
        this.gold += amount;
    }

    spendGold(amount) {
        if (amount > this.gold) {
            return false;
        }

        this.gold -= amount;
        return true;
    }

    recruitAdventurer(adventurer) {
        if (this.adventurers.length >= this.maxAdventurers) {
            return {
                success: false,
                message: "The guild roster is full."
            };
        }

        const alreadyRecruited = this.adventurers.some(
            member => member.id === adventurer.id
        );

        if (alreadyRecruited) {
            return {
                success: false,
                message: "This adventurer is already in the guild."
            };
        }

        if (!this.spendGold(adventurer.recruitmentCost)) {
            return {
                success: false,
                message: "Not enough gold."
            };
        }

        this.addAdventurer(adventurer);

        return {
            success: true,
            message: `${adventurer.name} has joined the guild!`
        };
    }

    getAvailableSlots() {
        return this.maxAdventurers - this.adventurers.length;
    }
}