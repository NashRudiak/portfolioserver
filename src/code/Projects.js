import "../stylesheets/List.css";
import "../stylesheets/App.css";
import ListEntry from "./ListEntry";

function Projects() {
    return (
        <div class="sectionSpan">
            <div class="fillbar" id="left" />
            <div class="playspace" id="right">
                <ul class="list">
                    {ListEntry(
                        "Java Compiler",
                        "* Will require permission to view code",
                        <>
                        <p>
                            A custom compiler for a programming language called C minus, which is an offshoot of C with
                            simplified rules. The project itself consisted of 3 individual stages, which sought to generalize
                            the compilation process into 3 steps.
                        </p>
                        <p>
                            To run, you will need Java and CUP, or Construction of Useful Parsers, and a custom program provided 
                            by Kenneth C. Louden as a TM simulator. Once compiled using make, the program will be able to create 
                            C minus code, which will then be possible to run using the TM simulator.
                        </p>
                        <p>
                            CUP encapsulated the first stage, which is a technology designed to implement a context free grammar. 
                            It required two parts, a context free grammar which defined the syntax for the language, and the data 
                            structure which will hold the information. For this step, an abstract syntax tree was chosen to hold 
                            all data, with each node being a subclass that contains only the necessary information.
                        </p>
                        <p>
                            Step 2 would be spent verifying if the information put in is valid in two different ways. 
                            Primarily consisted of checking to see if functions or variables referenced in the function do have 
                            a valid reference point and verifying the data types do match the operation.
                        </p>
                        <p>
                            The final part involved creating assembly instructions which can be run. Instead of using the op 
                            codes that would be traditionally used, we were requested to instead write them in assembly to 
                            generalize the process. Additionally involved usage of a stack for memory.
                        </p>
                        </>,
                        "https://github.com/NashRudiak/compilerunireup"
                    )}
                    {ListEntry(
                        "Buffer and Env exploit demo",
                        "* Will require permission to view code, adaptation of provided code",
                        <>
                        <p>
                            Showcases 2 separate known exploits that can allow arbitrary code to be run. The demo consisted of 
                            2 files provided by the professor, and we were required to run arbitrary code. Additionally, it 
                            required the use of a VM running linux for both safety and reliability.
                        </p>
                        <p>
                            Exploit 1 involved a program which was used to check if a file provided matched the criteria to make a 
                            buffer overflow occur, and in the scenario it would be given administrative permissions. It did this by 
                            using fscanf to read the first line in the file and compare it to a constant, however this exposed a 
                            fatal flaw. By causing a buffer overflow, the function is hijacked to open a new shell instead with 
                            full administrative permissions and execute any command.
                        </p>
                        <p>
                            Exploit 2 would utilize an exploit involving environment variables to execute arbitrary code. For the 
                            example, a function would perform system commands to create and delete a temporary file. However, by 
                            changing the environment variable it allows for a custom script to be run instead of the usual actions.
                        </p>
                        </>,
                        "https://github.com/NashRudiak/bufenvexploitunireup"
                    )}
                    {ListEntry(
                        "Adapt rotating cube with OpenCL",
                        "* Will require permission to view code, adaptation of provided code",
                        <>
                        <p>
                            An application of OpenCL which adapts a function originally running serial to utilize multithreading. 
                            The C code and logic was originally done by the professor, however it ran in serial and required 
                            augmenting to make use of the graphics card.
                        </p>
                        <p>
                            The implementation of the spin required the program to compute the matrix multiplication of a vector 
                            and a matrix to produce a new vector. The easy solution would be to simply perform the matrix 
                            multiplication for a single point, however that means adding the overhead of calling the function 
                            of each point. Instead, this solution removes that overhead by sending all points in and enough 
                            workers that you can perform the matrix operation at the same time.
                        </p>
                        </>,
                        "https://github.com/NashRudiak/adaptopenclunireup"
                    )}
                    {ListEntry(
                        "AWS CMD Bucket interface",
                        "* Will require permission to view code",
                        <>
                        <p>
                            Amazon Web Services have a unique cloud storage system similar to that of Linux, where each storage 
                            space has a name called a Bucket, which then hold traditional folders and files. Additionally, AWS 
                            has a robust API for creation of custom programs.
                        </p>
                        <p>
                            Utilizing these tools the program acts as a shell to interact with the buckets to quickly manage 
                            the system. Specifically storage of items, creation of new buckets, listing contents of buckets, 
                            and navigation through the storage space.
                        </p>
                        </>,
                        "https://github.com/NashRudiak/awscliunireup"
                    )}
                    {ListEntry(
                        "Azure and GCloud VM CMD Interface",
                        "* Will require permission to view code",
                        <>
                        <p>
                            Two separate programs which both seek to utilize the virtual computing capabilities of cloud 
                            computing platforms. Each program allows the easy creation of virtual machines, and the ability to 
                            easily log into the machines. The original purpose sought to compare the two services, which is why 
                            there are two different programs.
                        </p>
                        <p>
                            Azure was the first program and ended up defining how the comparison went. Azure has lots of 
                            documentation written for their command line interface rather than their library. As such the 
                            program instead acts as an interactive script, able to quickly create and use virtual machines 
                            in the cloud.
                        </p>
                        <p>
                            The program for Google Cloud Platform was written in a similar way to the Azure program, to provide 
                            a fair comparison between the two programs. As the Azure program used the command line, this program 
                            is very similar to the original Azure one.
                        </p>
                        </>,
                        "https://github.com/NashRudiak/azuregcpvmunirep"
                    )}
                    {ListEntry(
                        "Image Toolkit Library",
                        "* Will require permission to view code",
                        <>
                        <p>
                            A library dedicated to performing image operations, each fully customizable to produce different 
                            effects. The creation of this program involved an extra restriction, where we couldn’t use standard 
                            functions provided by Python, other than the PIL for the input of the image. Includes functions for 
                            flipping, cropping, scaling, rotating, mapping, histograms, convolution, and filters.
                        </p>
                        <p>
                            Ultimately using your own custom functions over standard functions causes some issues with 
                            optimization. But in turn, the underlying functions used to perform these image actions are 
                            explored with depth and precision. Additionally it allows for the exploration of alternate methods 
                            such as the faster Nearest Neighbour algorithm against Bilinear Interpolation.
                        </p>
                        </>,
                        "https://github.com/NashRudiak/imagetoolboxunirep"
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Projects;