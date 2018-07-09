$(document).ready(function(e){
		$(function() {
				$('#generateFormBtn').click(function(e){
					var result_div = $('#my-form-div');
					var jsonInput = $('#jsonInput'); 

					// we get the json data 
					var data = JSON.parse(jsonInput.val());

				if (data == undefined) {
					console.log('invalid json'); 
				}

				if (jsonInput == '') {
					alert('No Data')
					return false; 
				}

				//we get the target definition
				var frm_schema = data.schema; 
				var fieldset = createfiieldSet(data);

				//Supported Element Types
				/**
				 *  SmallTextBox
				 *  LargeTextbox
				 *  Button
				 *  dropdown
				 *  CheckboxMultiselect
				 *  SelectFileWidget
				 *  Label
				 *  
				 */
				$.each(data.schema, function(key,value) {
					switch(value.type){
						case 'smallTextBox':
							console.log('Creating textbox');
							smallTextBox = makesmallTextBox( value );
							addElementToFieldSet( fieldset, smallTextBox );
							break;
						case 'MultilineText':
							 MultilineText = makeMultilineText( value );
							 addElementToFieldSet ( fieldset, MultilineText);
							 break;
						case 'button':
							console.log('Creating button');
							button = makeButton( value );
							addElementToFieldSet(fieldset, button);
							break;
						case 'dropdown':
							dropdown = makeDropdown(value);
							addElementToFieldSet(fieldset, dropdown);
							break;
						case 'CheckboxMultiselect':
							checkboxMultiselect = makeCheckboxMultiselect( value );
							addElementToFieldSet( fieldset, checkboxMultiselect );
							break;
						case 'SelectFileWidget':
							selectFileWidget = makeSelectFile( value );
							addElementToFieldSet ( fieldset, selectFileWidget ); 
							break;
						case 'Label':
							labelText = makeLabelText( value );
							addElementToFieldSet( fieldset, labelText );
							break;
					}

				})
					//we now add the fieldset to the form
					form = createFormUi(fieldset);
					result_div.append( form.$element );

			});
						
		});

		function makesmallTextBox(dict){
			var smallTextBox = new OO.ui.TextInputWidget( {
				placeholder: dict.placeholder,
				title: dict.title,
				characterLength : dict.characterLength,
				required: dict.required,
			} );

			return smallTextBox;
		}

		function createfiieldSet(dict){
			console.log('creating fieldset');
			var fieldset = new OO.ui.FieldsetLayout( { 
			  label: dict.fs_label,
			  classes: [ dict.class ]
			} );
			return fieldset;
		}

		function addElementToFieldSet(fieldset, element){
			fieldset.addItems( [
				new OO.ui.FieldLayout( element, {} )
			] );
			
		}

		function createFormUi(fieldset){
			form = new OO.ui.FormLayout(  {
  				items: [ fieldset ],
			} );
			return form;
		}

		function makeButton(dict){
			button = new OO.ui.ButtonWidget( {
				label: dict.label,
				flags: [ dict.flags ],
				icon: dict.icon
			} );
			return button;
		}

		function makeDropdown(dict){
			var dropdown =  new OO.ui.ComboBoxInputWidget( {
				options: dict.options,
				label: dict.label,	
				menu: dict.menu.filterFromInput
			});
			console.log(dict.menu.filterFromInput)
			return dropdown;
		}

		function makeMultilineText(dict){
			var LargeTextbox = new OO.ui.MultilineTextInputWidget( {
				rows: dict.rows,
				value: dict.value,
				rows: dict.rows,
				autosize: dict.autosize,
				placeholder: dict.placeholder
			} );
			return LargeTextbox;
		}

		function makeCheckboxMultiselect(dict){
			var checkboxMultiselect = new OO.ui.CheckboxMultiselectInputWidget( {
				value: dict.value,
				options: dict.options
			});
			return checkboxMultiselect;
		}

		function makeSelectFile(dict){
			var selectFileWidget = new OO.ui.SelectFileWidget( {
				showDropTarget: dict.showDropTarget
			} );

			return selectFileWidget;
		}

		function makeLabelText(dict){
			labelText =  new OO.ui.LabelWidget( {
				label: dict.label
			} );
			return labelText;
		}
});