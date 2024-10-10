class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
    
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        });
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		const currentTime = new Date();
		let hours = currentTime.getHours();
		let minutes = currentTime.getMinutes();

		if (hours < 10) hours = `0${hours}`;
		if (minutes < 10) minutes = `0${minutes}`;

		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId) {
			return;
		}

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(alarm => {
				if (alarm.time === currentTime && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);
	}

	stop() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}