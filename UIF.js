
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "Hello" )
	txt.SetTextSize( 32 )
	lay.AddChild( txt )
	
	var drop_array = "menu1| menu item 2|menu item 3";
	var dropmenu = new uif.Dropdown(lay, "Dropdodsdfdafwn menu", 0.1, "menu");
dropmenu.SetMenu(drop_array);
dropmenu.SetMenu("aded n4");
	txt.SetText(dropmenu.GetMenu(1));
	
	
	
	//Add layout to app.	

	app.AddLayout( lay )
}


const uif = function(){
		this.color = "red";
}

	//uif.Dropdown = function (layout, name, size, type){
		//	return new DropDown(layout, name, size, type);
//	}
//uif.color = "red";

uif.Dropdown = function(layout, name, size, type) {
				this._layout = layout;
				this._name = name;
				this._type = type;
				this._menu = [];
				this._size = (typeof size === "number"? size : -1)
				this._size.type = (typeof size ==="number" && size > 1 ? "px" : "");
				this._size.option = (size === "fill"? "FillX" : "")
				this._button = {};

				this.GetMenu = (index) =>{
							if(index == null) return this._menu;
							else return this._menu;
				}
				this.SetMenu = (x) =>{
				    var item = x.split("|");
				         for(var i in item){
				 		         if(item[i][0] == " "){ this._menu.push(item[i].slice(1)) }
				 		         else{ this._menu.push(item[i]) }
				         }
				 }
				
				this.Button =  () =>{
						var btn = app.AddButton(this._layout, this._name, this._size, -1, "")
				            btn.SetBackColor(uif.color);
				}
				this.Button();
}    



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
///
///
//
//
//
//
///
///
///
///
///
///
///