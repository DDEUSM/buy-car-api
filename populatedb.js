
const fs = require("fs");
const path = require("path");
const lineReader = require("line-reader");

function nameInCamelCase(fileName)
{
    let separateChars = ["_", "-"];         

    const foundedChar = separateChars.reduce((accumulator, char) => 
    {
        fileName.includes(char)? accumulator += char : null
        return accumulator
    }, "");    
    
    if(!foundedChar)
    {
        return fileName;
    }

    const nameChunks = fileName.split(foundedChar);

    const finalFileName = nameChunks.reduce((finalText, text, index) => 
    {
        if(index < 1)
        {
            return finalText = (text[0].toLowerCase()) + text.slice(1,);
        }
        return finalText += (text[0].toUpperCase()) + text.slice(1,);
    });

    return finalFileName;        
}


async function readToWrite(inputPaths, outputStream, linesToWrite)
{
    const inputStream = fs.createReadStream(inputPaths[0], { encoding: "utf-8"});
    const ext = path.extname(inputPaths[0]);
    const fileName = nameInCamelCase(path.basename(inputPaths[0], ext));      
    let firstLine = true;    
    let beforeLine = "";
    lineReader.eachLine(inputStream, (line, last) => 
    {        
        if(firstLine)
        {
            firstLine = false;
            const line1 = line.split(";");
            line1[0] = "id";
            linesToWrite += `INSERT INTO ${fileName} (${line1}) VALUES\n`;            
        }
        else if(!last)        
        {                               
            const values = line.split(";").map(value => 
                isNaN(value + 1)? "'"+ value +"'" : Number(value));                                    
            linesToWrite +=`(${values.toString()}),\n`;
            beforeLine = values.toString();
        }
        else
        {            
            let validValues = true;                     
            const values = line.split(";").map(value => 
            {
                let valueFormated = isNaN(value + 1)? "'"+ value +"'" : Number(value);
                if(valueFormated === 0 || valueFormated === null || valueFormated === undefined)
                {                    
                    validValues = false
                    return;
                }
                return valueFormated;
            });   
            
            if(validValues)
            {                
                linesToWrite += `(${values.toString()});\n\n`;
            }
            else
            {                   
                const lastIndex = linesToWrite.length - 2;
                linesToWrite = linesToWrite.substring(0, lastIndex)+";\n";
                linesToWrite += `\n\n`;
            } 
            
            outputStream.write(linesToWrite, () => 
            {
                if(inputPaths.length > 1)
                {
                    inputPaths.shift()
                    readToWrite(inputPaths, outputStream, "");
                }
            });                                               
        }                        
    });    
}

async function writeDatas(inputPaths, outputPath)
{            
    const outputStream = fs.createWriteStream(outputPath, { encoding: "utf-8"});                     
    readToWrite(inputPaths, outputStream);           
}


function writeInDiffFiles(props)
{
    const { inputDirPath, outputPath: outputDirPath, toExt } = props;
    const outputDirPathClean = path.normalize(path.dirname(outputDirPath));        
    fs.readdirSync(path.normalize(inputDirPath)).map(async fileName => 
    {
        const fromExt = path.extname(fileName);
        const inputFilePath = path.normalize(inputDirPath+"\\"+fileName);        
        const outputFileName = path.basename(path.normalize(outputDirPathClean+"\\"+fileName), fromExt);
        const outputFilePath = path.normalize(outputDirPathClean+"\\"+outputFileName+toExt); 
        const outputStream = fs.createWriteStream(outputFilePath, { encoding: "utf-8"}); 

        readToWrite([inputFilePath], outputStream, []);   
    });
}

function writeInSameFile(props)
{
    const { inputDirPath, outputPath: outputFilePath  } = props;
    const inputFilePaths = [];
    const outputFilePathNormalized = path.normalize(outputFilePath);
    const outputStream = fs.createWriteStream(outputFilePathNormalized, { encoding: "utf-8"});     
    fs.readdirSync(path.normalize(inputDirPath)).map(async fileName => 
    {
        inputFilePaths.push(path.normalize(inputDirPath+"\\"+fileName));                        
    });    
    readToWrite(inputFilePaths, outputStream, []);   
}


function writeDatasInterface(props)
{    
    const fns = { writeInDiffFiles, writeInSameFile };
    fns[props.fn](props);
}

const dirPath = "C:\\Users\\david\\Documents\\csv-api-gran-turismo";
const outputPath = "C:\\Users\\david\\Documents\\projeto_dev_web\\poo\\api-gran-turismo\\populatedb.sql";

writeDatasInterface({
    inputDirPath: dirPath,
    outputPath: outputPath,
    toExt: ".sql", 
    fn: "writeInSameFile"
});

writeDatasInterface({
    inputDirPath: dirPath,
    outputPath: outputPath,
    toExt: ".sql", 
    fn: "writeInDiffFiles"
});
