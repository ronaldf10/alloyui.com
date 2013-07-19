AUI().ready(
	'aui-overlay-mask',
	function(A) {

	var overlayMask = new A.OverlayMask().render();

	var message = A.Node.create('<h3 class="message">CLICK ON ME TO HIDE THIS PANEL</h3>');

	message.on('click',
		function(event) {
			overlayMask.hide();
			message.remove();
		}
	)

	var showMessage = function() {
		message.appendTo(document.body);
	};
	// Extras
	var setTarget = function(elem) {
		overlayMask.set('target', elem).show();

		if (elem == document) {
			showMessage();
		}
	};

	var element1 = A.one('#showOn-red').on(
		'click',
		function() {
			setTarget(A.one('#element1'))
		}
	);

	var element2 = A.one('#showOn-blue').on(
		'click',
		function() {
			;
		}
	);

	var element3 = A.one('#showOn-green').on(
		'click',
		function() {
			setTarget(A.one('#element3'));
		}
	);

	A.on('click', A.bind(setTarget, null, document), '#showOn-document');
	A.on('click', A.bind(setTarget, null, '#element1'), '#showOn-red');
	A.on('click', A.bind(setTarget, null, '#element2'), '#showOn-blue');
	A.on('click', A.bind(setTarget, null, '#element3'), '#showOn-green');
	}
);