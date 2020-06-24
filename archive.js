/**
 * This class dynamically constructs a DOM section containing hyperlinks to the original index cards.
 * The DOM section is injected into the container for the index cards and feed to lightgallery for display
 * When the gallery is closed, the DOM section is destroyed.
 * 
 */
class IndexCard {
    constructor(name, array) {
        this.name = name;
        this.array = array;
    }

    source() {
        return this.name;
    }

    elements() {
        return this.array;
    }
}

let indexCards = new Map();

/* Map the cards to their collections in archive/ folder */
indexCards.set( 'assets/card1.png', new IndexCard( "4036", ["-4", "-1", "-2", "-3", "-5"]) );
indexCards.set( 'assets/card2.png', new IndexCard( "1980-297",  ["-3", "-1", "-2"]) );
indexCards.set( 'assets/card3.png', new IndexCard( "2004-22", ["-7","-1","-2","-3","-4","-5","-6","-8"]));
indexCards.set( 'assets/card4.png', new IndexCard( "2003-45", ["-26", "-1","-2","-3","-4","-5","-6","-7","-8","-9","-10","-11","-12","-13","-14","-15","-16","-17","-18","-19","-20","-21","-22","-23","-24","-25","-27","-28","-29","-30","-31","-32","-33","-34"]));
indexCards.set( 'assets/card5.png', new IndexCard( "2003-45", ["-9","-1", "-2","-3","-4","-5","-6","-7","-8","-10","-11","-12","-13","-14","-15","-16","-17","-18","-19","-20","-21","-22","-23","-24","-25","-26","-27","-28","-29","-30","-31","-32","-33","-34"]));
indexCards.set( 'assets/card6.png', new IndexCard( "2003-45", ["-10","-1", "-2","-3","-4","-5","-6","-7","-8","-9","-11","-12","-13","-14","-15","-16","-17","-18","-19","-20","-21","-22","-23","-24","-25","-26","-27","-28","-29","-30","-31","-32","-33","-34"]));
indexCards.set( 'assets/card7.png', new IndexCard( "4031", ["-4", "-1","-2","-3","-5","-6","-7","-8","-9","-10","-11"]));
indexCards.set( 'assets/card8.png', new IndexCard( "4769", ["-12", "-1","-2","-3","-6","-7","-8","-9","-10", "-11", "-13"]));
indexCards.set( 'assets/card9.png', new IndexCard( "4769", ["-11", "-1","-2","-3","-6","-7","-8","-9","-10", "-12", "-13"]));
indexCards.set( 'assets/card10.png', new IndexCard( "4060", ["-1", "-2"]) );
indexCards.set( 'assets/card11.png', new IndexCard( "4061", ["-1", "-2"]) );
indexCards.set( 'assets/card12.png', new IndexCard( "2003-45", ["-18","-1", "-2","-3","-4","-5","-6","-7","-8","-9","-10", "-11","-12","-13","-14","-15","-16","-17","-19","-20","-21","-22","-23","-24","-25","-26","-27","-28","-29","-30","-31","-32","-33","-34"]));
indexCards.set( 'assets/card13.png', new IndexCard( "4037", ["-3", "-1","-2","-5","-6","-7"]));
indexCards.set( 'assets/card14.png', new IndexCard( "2003-45", ["-20","-1", "-2","-3","-4","-5","-6","-7","-8","-9","-10", "-11","-12","-13","-14","-15","-16","-17","-18","-19","-21","-22","-23","-24","-25","-26","-27","-28","-29","-30","-31","-32","-33","-34"]));
indexCards.set( 'assets/card15.png', new IndexCard( "4780", ["-6", "-1","-2","-3","-4", "-5", "-7","-8","-9","-10","-11","-12", "-13", "-14"]));
indexCards.set( 'assets/card16.png', new IndexCard( "4777", ["-7","-1", "-2","-3","-4","-5","-6","-7","-8", "-9","-10", "-11","-12","-13","-14","-15","-16","-17","-18","-19","-20"]));
indexCards.set( 'assets/card17.png', new IndexCard( "2003-45", ["-5", "-1","-2","-3","-4","-5","-6","-7","-8","-9","-10","-11","-12","-13","-14","-15","-16","-17","-18","-19","-20","-21","-22","-23","-24","-25","-26", "-27","-28","-29","-30","-31","-32","-33","-34"]));
indexCards.set( 'assets/card18.png', new IndexCard( "1985-86", ["-3", "-1","-2","-4", "-5","-6","-7","-8","-9","-10"]));
indexCards.set( 'assets/card19.png', new IndexCard( "2004-23", ["-9", "-1","-2","-3", "-4", "-5","-6","-7","-8","-10"]));
indexCards.set( 'assets/card20.png', new IndexCard( "1995-35", ["-1", "-2"]) );
indexCards.set( 'assets/card21.png', new IndexCard( "4780", ["-10", "-1","-2","-3","-4", "-5", "-6","-7","-8","-9","-11","-12", "-13", "-14"]));
indexCards.set( 'assets/card22.png', new IndexCard( "4790", ["-3", "-1","-2"]));
indexCards.set( 'assets/card23.png', new IndexCard( "4781", ["-24", "-1","-2","-3","-4","-5","-6","-7","-8","-9","-10","-11","-12","-13","-14","-15","-16","-17","-18","-19","-20","-21","-22","-23","-25","-26","-27","-28","-29","-30","-31","-32"]));
indexCards.set( 'assets/card24.png', new IndexCard( "2004-22", ["-5","-1","-2","-3","-4","-5","-6","-7","-8"]));
indexCards.set( 'assets/card25.png', new IndexCard( "4059", ["-1", "-2"]) );
indexCards.set( 'assets/card26.png', new IndexCard( "4778", ["-5", "-2","-3","-4","-6","-7","-8","-9","-10"]) );
indexCards.set( 'assets/card27.png', new IndexCard( "4778", ["-5", "-2","-3","-4","-6","-7","-8","-9","-10"]) );
indexCards.set( 'assets/card28.png', new IndexCard( "4967", ["-7", "-1","-2","-3","-4","-5","-6"]));
indexCards.set( 'assets/card29.png', new IndexCard( "4967", ["-6", "-1","-2","-3","-4","-5","-7"]));
indexCards.set( 'assets/card30.png', new IndexCard( "4967", ["-5", "-1","-2","-3","-4","-6","-7"]));
indexCards.set( 'assets/card31.png', new IndexCard( "4055", ["-1", "-2"]) );
indexCards.set( 'assets/card32.png', new IndexCard( "4057", ["-1", "-2"]) );

function createLink(id, array) {
    var item = "";
    for(  var i = 0; i < array.length; i ++ ) {

        var seq = array[i];

        name = "archive/" + id + "/" + id + seq + ".jpg";

        item += "<a " + (i == 0 ? "id=\"first-index-card\"" : "" )  +  " href=\"" + name + "\"><img src=\""+ name + "\"></a>\n";
    }

    return item;
}

function createGallery(name,array)
{
    document.getElementById("lightgallery").innerHTML = createLink(name,array );
    lightGallery(document.getElementById('lightgallery'));      
}

function displayIndexCards(key) {
    let ic = indexCards.get(key);
    createGallery(ic.source(), ic.elements());
    document.getElementById("first-index-card").click();
    return true;
}

function createPlainTextNode(text,parent)
{
    let elem = document.createElement("p");
    elem.setAttribute("class", "metadata");
    elem.innerText = text;
    parent.append(elem);
}

function createPlainText(metadataObject, parent)
{
    let text = "";
   
    if(metadataObject.DESCRIPTION !== undefined && metadataObject.AUTHOR !== undefined && metadataObject.MATERIALS !== undefined && metadataObject.DIMENSIONS !== undefined) {
        text = metadataObject.DESCRIPTION;
        text += " (";
        text += metadataObject.AUTHOR;
        text += " )";

        createPlainTextNode(text,parent);        

        text = metadataObject.MATERIALS;

        createPlainTextNode(text,parent);

        text = metadataObject.DIMENSIONS;

        createPlainTextNode(text,parent);
    }
    else if(metadataObject.DESCRIPTION !== undefined && metadataObject.AUTHOR !== undefined && metadataObject.MATERIALS !== undefined) {
        text = metadataObject.DESCRIPTION;
        text += " (";
        text += metadataObject.AUTHOR;
        text += " )";

        createPlainTextNode(text,parent);        

        text = metadataObject.MATERIALS;

        createPlainTextNode(text,parent);
    }
    else if(metadataObject.DESCRIPTION !== undefined && metadataObject.AUTHOR !== undefined) {
        text = metadataObject.DESCRIPTION;
        text += " (";
        text += metadataObject.AUTHOR;
        text += " )";

        createPlainTextNode(text,parent);
    }
    else if( metadataObject.DESCRIPTION !== undefined ) {
        text = metadataObject.DESCRIPTION;

        createPlainTextNode(text,parent);
    }
    else if ( metadataObject.AUTHOR !== undefined ) {
        text = metadataObject.AUTHOR;

        createPlainTextNode(text,parent);
    }
}

function findMetadata(key)
{
    for( let x = 0; x < metadataArt.length; x++ ) {
        if( metadataArt[x].INVENTORY.includes(key) ) {
            return metadataArt[x];
        }
        
    }

    for( let x = 0; x < metadataPhotography.length; x++ ) {
        if( metadataPhotography[x].INVENTORY.includes(key)) {
            return metadataPhotography[x];
        }
        
    }

    for( let x = 0; x < metadataTexts.length; x++ ) {
        if( metadataTexts[x].INVENTORY.includes(key)) {
            return metadataTexts[x];
        }
    }

    return null;
}

function clearMetadata() {
    let elem = document.getElementById("metadata-container");
    while(elem.hasChildNodes()) {
        elem.removeChild(elem.firstChild);
    }
}

function createMetadataElement(key)
{
    let ic = indexCards.get(key);
    clearMetadata();
    let metadata = findMetadata(ic.source());
    let parent = document.getElementById("metadata-container");
    if(metadata != null) {
        createPlainText(metadata,parent);
        console.log(metadata);
    }
    else {
        console.log("There is no metadata about object " + key);
    }

    createPlainTextNode("Double-click the card to see the original",parent);
}
