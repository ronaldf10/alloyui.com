AUI().ready(
	'aui-calendar',
	function(A) {
		new A.Calendar(
			{
				allowNone: true,
				allowToday: true,
				boundingBox: '#myCalendar'
			}
		).render();
	}
);

