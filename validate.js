      // Create form elements (two text inputs and the button input, in this example).



function createMultilineTextInputWidget(dt){
    var message = new OO.ui.MultilineTextInputWidget( {
      rows: 3,
      placeholder : 'Something\n here'
    } );
}

function createRadioSelectInputWidget(d){
    var radiobtn = new OO.ui.RadioSelectInputWidget( {
        options: [
          {
            data: 'cat',
            label: 'Cat'
          },
          {
            data: 'dog',
            label: 'Dog'
          },
          {
            data: 'goldfish',
            label: 'Goldfish'
          }
        ]
    } );
}

function create
var animalList = new OO.ui.CheckboxMultiselectInputWidget( {
  value: [
    'dog',
    'cat'
  ],
  options: [
    {
      data: 'cat',
      label: 'Cat'
    },
    {
      data: 'dog',
      label: 'Dog',
    },
    {
      data: 'goldfish',
      label: 'Goldfish'
    }
  ]
} );


var selectOneMenu = new OO.ui.DropdownWidget( {
  label: 'Select one',
  menu: {
    items: [
      new OO.ui.MenuOptionWidget( {
        data: 'a',
        label: 'First'
      } ),
      new OO.ui.MenuOptionWidget( {
        data: 'b',
        label: 'Second',
      } ),
      new OO.ui.MenuOptionWidget( {
        data: 'c',
        label: 'Third'
      } )
    ]
  }
} )

var multiSelectTagMenu = new OO.ui.CapsuleMultiselectWidget( {
  menu: {
    items: [
      new OO.ui.MenuOptionWidget( {
        data: 'abc',
        label: 'Label for abc'
      } ),
      new OO.ui.MenuOptionWidget( {
        data: 'asd',
        label: 'Label for asd'
      } ),
      new OO.ui.MenuOptionWidget( {
        data: 'jkl',
        label: 'Label for jkl'
      } ),
      new OO.ui.MenuOptionWidget( {
        data: 'jjj',
        label: 'Label for jjj'
      } ),
      new OO.ui.MenuOptionWidget( {
        data: 'zxc',
        label: 'Label for zxc'
      } ),
      new OO.ui.MenuOptionWidget( {
        data: 'vbn',
        label: 'Label for vbn'
      } )
    ]
  }
} );

var autoCompleteCombo = new OO.ui.ComboBoxInputWidget( {
  options: [
    {
      data: 'asd',
      label: 'A Label for asd'
    },
    {
      data: 'fgh',
      label: 'A Label for fgh'
    },
    {
      data: 'jkl',
      label: 'A Label for jkl'
    },
    {
      data: 'zxc',
      label: 'A Label for zxc'
    },
    {
      data: 'vbn',
      label: 'A Label for vbn'
    },
    {
      data: 'asd',
      label: 'B Label for asd'
    },
    {
      data: 'fgh',
      label: 'B Label for fgh'
    },
    {
      data: 'jkl',
      label: 'B Label for jkl'
    },
    {
      data: 'zxc',
      label: 'B Label for zxc'
    },
    {
      data: 'vbn',
      label: 'B Label for vbn'
    },
    {
      data: 'asd',
      label: 'C Label for asd'
    },
    {
      data: 'fgh',
      label: 'C Label for fgh'
    },
    {
      data: 'jkl',
      label: 'C Label for jkl'
    },
    {
      data: 'zxc',
      label: 'C Label for zxc'
    },
    {
      data: 'vbn',
      label: 'C Label for vbn'
    },
    {
      data: 'asd',
      label: 'D Label for asd'
    },
    {
      data: 'fgh',
      label: 'D Label for fgh'
    },
    {
      data: 'jkl',
      label: 'D Label for jkl'
    },
    {
      data: 'zxc',
      label: 'D Label for zxc'
    },
    {
      data: 'vbn',
      label: 'D Label for vbn'
    },
    {
      data: 'asd',
      label: 'E Label for asd'
    },
    {
      data: 'fgh',
      label: 'E Label for fgh'
    },
    {
      data: 'jkl',
      label: 'E Label for jkl'
    },
    {
      data: 'zxc',
      label: 'E Label for zxc'
    },
    {
      data: 'vbn',
      label: 'E Label for vbn'
    }
  ],
  menu: {
    filterFromInput: true
  }
} );

var submit = new OO.ui.ButtonWidget( {
  label: 'Submit',
  flags: [
    'primary',
    'progressive'
  ]
} )

// Create a FieldsetLayout.
var fieldset = new OO.ui.FieldsetLayout( { 
  label: 'Building a Form and validating using oojs-ui',
  classes: [ "container" ]
} );

 
// Use the addItems() method to add FieldLayouts that contain the form 
// elements (the text inputs and submit button) to the FieldsetLayout:
fieldset.addItems( [ 

  new OO.ui.FieldLayout( name1, {
         label: 'Name' 
      } ), 

  new OO.ui.FieldLayout( message, {
         label: 'Message'
      } ),

  new OO.ui.FieldLayout( radiobtn, {
         label: 'Choose an Animal' 
      } ),
  new OO.ui.FieldLayout( animalList, {
         label: 'Choose more Animals'
      } ),

  new OO.ui.FieldLayout( selectOneMenu, { 

      } ),
  new OO.ui.FieldLayout( multiSelectTagMenu, {

      } ),
  new OO.ui.FieldLayout( autoCompleteCombo, {
      } ),

  new OO.ui.FieldLayout( submit )   

] );


 
// Add the FieldsetLayout to a FormLayout. 
var form = new OO.ui.FormLayout(  {
  items: [ fieldset ],

} );
$( 'body' ).append( form.$element );

submit.on('click' , function(){
   $('#res').html('<p>Hello <strong>' + name1.value + '</strong>.' +
                  '<br/>Your message is: <strong>' + message.value + '</strong>.' +
                  '<br/> Your animal is a : <strong>' +radiobtn.value+ '</strong>.'+
                  '<br/> You selected more animals of <strong>:' +animalList.value+ '</strong>.'+
                  '<br/> For tags you had : <strong>' +multiSelectTagMenu.value+ '</strong>.'+
                  '<br/> Then searched for : <strong>' +autoCompleteCombo.value+ '</strong>.'+
                  '</p>');
});