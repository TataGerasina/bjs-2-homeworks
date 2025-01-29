class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null; // для хранения id таймера без начального значения
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error("Отсутствуют обязательные аргументы");
		}

		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn("Уже присутствует звонок на это же время");
		} // есть ли звонок с таким же временем, то предупреждение

		const newAlarm = {
			callback,
			time,
			canCall: true
		};
		this.alarmCollection.push(newAlarm);
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);

	} // удаляет звонки по определённому времени

	getCurrentFormattedTime() {
		const now = new Date();
		let hours = now.getHours();
		let minutes = now.getMinutes();

		return "${hours}:${minutes}";
	} //возвращает текущее время в строковом формате HH:MM.


	start() {
		if (this.intervalId) {
			return;
		} //запускает будильник

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
		clearInterval(this.intervalId);
		this.intervalId = null;
	} // для удаления интервала

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		});
	}
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	} // удаляет все звонки
}