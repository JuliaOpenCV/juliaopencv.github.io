var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#OpenCV",
    "page": "Home",
    "title": "OpenCV",
    "category": "Module",
    "text": "The Julia wrapper for Open Source Computer Vision library (OpenCV).\n\nA quick demo:\n\njulia> using CVCore, CVImgCodecs, CVHighGUI\n\n# Reading a image file into a Mat (equivalent to cv::Mat in C++)\njulia> A = imread(Pkg.dir(\"OpenCV\", \"test\", \"lena.png\"))\nCVCore.Mat{UInt8,3}\n[:, :, 1] =\n 0x4a  0x4f  0x4c  0x4b  0x50  0x50  …  0x37  0x37  0x36  0x37  0x37  0x37\n 0x4d  0x4e  0x4b  0x4d  0x52  0x4c     0x3a  0x3a  0x39  0x39  0x39  0x39\n 0x4e  0x4c  0x4d  0x4f  0x4b  0x4b     0x36  0x32  0x34  0x36  0x36  0x37\n 0x50  0x48  0x52  0x4e  0x4a  0x50     0x35  0x35  0x38  0x39  0x3a  0x37\n 0x52  0x46  0x56  0x4d  0x49  0x53     0x35  0x36  0x39  0x3b  0x3b  0x3a\n 0x52  0x49  0x53  0x4e  0x4a  0x50  …  0x37  0x34  0x37  0x3b  0x3d  0x3d\n 0x4e  0x51  0x4a  0x51  0x4d  0x47     0x39  0x36  0x38  0x3d  0x3d  0x3d\n 0x4c  0x52  0x46  0x50  0x4d  0x44     0x3a  0x3a  0x3e  0x3d  0x3a  0x38\n 0x4b  0x4d  0x48  0x4d  0x4a  0x47     0x39  0x3b  0x3b  0x3a  0x33  0x2e\n    ⋮                             ⋮  ⋱                             ⋮\n\n# You can convert it to a Julia array\njulia> B = Array(A)\n3×512×512 Array{UInt8,3}:\n[:, :, 1] =\n 0x4a  0x4f  0x4c  0x4b  0x50  0x50  …  0x37  0x37  0x36  0x37  0x37  0x37\n 0x6f  0x74  0x71  0x6f  0x74  0x73     0x4e  0x4e  0x4d  0x4e  0x4e  0x4e\n 0xc1  0xc6  0xc3  0xc3  0xc8  0xc9     0x92  0x92  0x91  0x92  0x92  0x92\n\n[:, :, 2] =\n 0x4d  0x4e  0x4b  0x4d  0x52  0x4c  …  0x3a  0x3a  0x39  0x39  0x39  0x39\n 0x72  0x73  0x70  0x71  0x76  0x6f     0x51  0x51  0x50  0x50  0x50  0x50\n 0xc4  0xc5  0xc2  0xc5  0xca  0xc5     0x95  0x95  0x94  0x94  0x94  0x94\n\n[:, :, 3] =\n 0x4e  0x4c  0x4d  0x4f  0x4b  0x4b  …  0x36  0x32  0x34  0x36  0x36  0x37\n 0x73  0x6b  0x75  0x71  0x6d  0x73     0x4e  0x4c  0x4e  0x50  0x50  0x4f\n 0xc7  0xc0  0xc8  0xc5  0xc1  0xc6     0x90  0x92  0x94  0x96  0x93  0x91\n\n# Show the image\njulia> imshow(\"lena\", A); waitKey(0) # you will see a GUI window\n\n(Image: )\n\nDependencies (in short)\n\nopencv\nJulia\nCxx.jl\n\nGeneral API guidelines\n\nFunction names should be same between Julia and C++, except for appending ! (e.g. threshold!), which means the fuction does in-place operations.\ncv::Mat in C++ are represented as Mat{T,N} in Julia (see CVCore.jl for details).\n\nPackage structure\n\nTo simplify development and minimize dependencies, the Julia wrapper consists of the packages below:\n\nCVCore.jl\nCVImgProc.jl\nCVImgCodecs.jl\nCVVideoIO.jl\nCVHighGUI.jl\nCVCalib3d.jl\nLibOpenCV.jl\n\nfollowing the opencv module structure except for the LibOpenCV.jl which manages binary dependencies (i.e. search installed OpenCV shared libraries or build and install them if not found).\n\n\n\n"
},

{
    "location": "index.html#OpenCV.jl-1",
    "page": "Home",
    "title": "OpenCV.jl",
    "category": "section",
    "text": "The Julia wrapper for Open Source Computer Vision library (OpenCV)https://github.com/JuliaOpenCV/OpenCV.jlOpenCV"
},

{
    "location": "installation.html#",
    "page": "Installation",
    "title": "Installation",
    "category": "page",
    "text": ""
},

{
    "location": "installation.html#Installation-1",
    "page": "Installation",
    "title": "Installation",
    "category": "section",
    "text": "OpenCV Julia packages have fairly complex dependencies, so please take a careful look at the installation guide for each dependency."
},

{
    "location": "installation.html#Requirements-1",
    "page": "Installation",
    "title": "Requirements",
    "category": "section",
    "text": ""
},

{
    "location": "installation.html#Platform-1",
    "page": "Installation",
    "title": "Platform",
    "category": "section",
    "text": "Currently only tested on OSX."
},

{
    "location": "installation.html#opencv-1",
    "page": "Installation",
    "title": "opencv",
    "category": "section",
    "text": "You need to install opencv 3.0.0 or later as shared libraries (BUILD_SHARED_LIBS=ON). For the detailed installation instructions, see the opencv page."
},

{
    "location": "installation.html#Julia-1",
    "page": "Installation",
    "title": "Julia",
    "category": "section",
    "text": "Julia 0.5 or later is required. Install Julia v0.5 from binary distributions or build it from source."
},

{
    "location": "installation.html#Cxx.jl-1",
    "page": "Installation",
    "title": "Cxx.jl",
    "category": "section",
    "text": "You need to install Keno/Cxx.jl. Building Cxx.jl is a bit complex, as it builds its own llvm and clang by default. Please take a careful look at the installation guide of Cxx.jl. Ideally, the installation can be done as follows:Pkg.clone(\"https://github.com/Keno/Cxx.jl\")\nPkg.build(\"Cxx\")"
},

{
    "location": "installation.html#Install-OpenCV-Julia-packages-1",
    "page": "Installation",
    "title": "Install OpenCV Julia packages",
    "category": "section",
    "text": ""
},

{
    "location": "installation.html#Clone-and-build-1",
    "page": "Installation",
    "title": "Clone and build",
    "category": "section",
    "text": "You are almost there! Clone the packages:Pkg.clone(\"https://github.com/JuliaOpenCV/CVCore\")\nPkg.clone(\"https://github.com/JuliaOpenCV/CVCalib3d\")\nPkg.clone(\"https://github.com/JuliaOpenCV/CVHighGUI\")\nPkg.clone(\"https://github.com/JuliaOpenCV/CVVideoIO\")\nPkg.clone(\"https://github.com/JuliaOpenCV/CVImgProc\")\nPkg.clone(\"https://github.com/JuliaOpenCV/CVImgCodecs\")\nPkg.clone(\"https://github.com/JuliaOpenCV/LibOpenCV\")\nPkg.clone(\"https://github.com/JuliaOpenCV/OpenCV\")and then:Pkg.build(\"LibOpenCV\")which searches installed opencv shared libraries. If you don't have opencv installed, Pkg.build(\"LibOpenCV\") will try to build and install them into the LibOpenCV package directory, but not recommended unless if you have perfect requirements to build opencv."
},

{
    "location": "installation.html#Test-if-the-installation-succeeded-1",
    "page": "Installation",
    "title": "Test if the installation succeeded",
    "category": "section",
    "text": "Pkg.test(\"OpenCV\")If it succeeded, installation is done. If you encounter errors even though all the previous steps succeeded, please file a bug report."
},

{
    "location": "getting-started.html#",
    "page": "Getting started",
    "title": "Getting started",
    "category": "page",
    "text": ""
},

{
    "location": "getting-started.html#Getting-stareted-1",
    "page": "Getting started",
    "title": "Getting stareted",
    "category": "section",
    "text": "See CVCore.jl."
},

{
    "location": "modules/core.html#",
    "page": "Core",
    "title": "Core",
    "category": "page",
    "text": ""
},

{
    "location": "modules/core.html#CVCore",
    "page": "Core",
    "title": "CVCore",
    "category": "Module",
    "text": "Core functionality\n\nBasic usage\n\nThe primary export of the package is Mat{T,N}, which is the Julia type for cv::Mat. Mat{T,N} is designed to be a subtype of AbstractArray{T,N}. It has element type (T) and dimension (N) as type parameters, whereas cv::Mat doesn't. Note that matrix construction interface is different between Julia and C++. cv::Mat(3,3,CV_8U) in C++ can be translated in Julia as Mat{UInt8}(3,3).\n\nCreate uninitialized matrix:\n\nusing CVCore\n\njulia> A = Mat{Float64}(3,3)\n3×3 CVCore.Mat{Float64,2}:\n   3.39519e-313  4.94066e-324   2.122e-314\n NaN             1.72723e-77   -2.32036e77\n   1.97626e-323  0.0            0.0\n\nCreate matrix filled with Scalar (cv::Scalar)\n\njulia> A = Mat{Float64}(3,3,Scalar(1))\n3×3 CVCore.Mat{Float64,2}:\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n\nMatirx operations\n\njulia> A * A\nCVCore.MatExpr{Float64,2}\n3×3 CVCore.Mat{Float64,2}:\n 3.0  3.0  3.0\n 3.0  3.0  3.0\n 3.0  3.0  3.0\n\njulia> A + A\nCVCore.MatExpr{Float64,2}\n3×3 CVCore.Mat{Float64,2}:\n 2.0  2.0  2.0\n 2.0  2.0  2.0\n 2.0  2.0  2.0\n\njulia> A - A\nCVCore.MatExpr{Float64,2}\n3×3 CVCore.Mat{Float64,2}:\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n\nCreate multi-channel matrix\n\njulia> A = Mat{Float64}(3,3,3,Scalar(1,2,3))\n3×3×3 CVCore.Mat{Float64,3}:\n[:, :, 1] =\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n\n[:, :, 2] =\n 2.0  2.0  2.0\n 2.0  2.0  2.0\n 2.0  2.0  2.0\n\n[:, :, 3] =\n 3.0  3.0  3.0\n 3.0  3.0  3.0\n 3.0  3.0  3.0\n\nConversion between Mat{T,N} and Array{T,N}\n\njulia> B = Array(A)\n3×3 Array{Float64,2}:\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n\njulia> C = Mat(B)\n3×3 CVCore.Mat{Float64,2}:\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n 1.0  1.0  1.0\n\nNote that Mat(B) where B is an array shares the underlying data.\n\n\n\n"
},

{
    "location": "modules/core.html#CVCore.jl-1",
    "page": "Core",
    "title": "CVCore.jl",
    "category": "section",
    "text": "CVCore"
},

{
    "location": "modules/core.html#Index-1",
    "page": "Core",
    "title": "Index",
    "category": "section",
    "text": "Modules = [CVCore]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/core.html#CVCore.AbstractCvMat",
    "page": "Core",
    "title": "CVCore.AbstractCvMat",
    "category": "Type",
    "text": "AbstractCvMat{T,N} represents N-dimentional arrays in OpenCV (cv::Mat, cv::UMat, etc), which element type are bound to T.\n\n\n\n"
},

{
    "location": "modules/core.html#CVCore.Mat",
    "page": "Core",
    "title": "CVCore.Mat",
    "category": "Type",
    "text": "Mat{T,N} represents cv::Mat with encoded type information\n\nMat{T,N} keeps cv::Mat instance with: element type T and dimention N. Hence, in fact it behaves like cv::Mat_<T>. Note that Mat stores its internal data in column-major order, while Julia's arrays are in row-major.\n\nNOTE: Mat{T,N} supports multi-channel 2-dimentional matrices and single-channel 2-dimentional matrices for now. Should be extended for N-dimentional cases.\n\n\n\n"
},

{
    "location": "modules/core.html#CVCore.MatExpr",
    "page": "Core",
    "title": "CVCore.MatExpr",
    "category": "Type",
    "text": "MatExpr{T,N} represents cv::MatExpr with encoded type information\n\nT and N represents the element type and the dimension of Mat, respectively.\n\nTODO: should consder wherther I make this a subtype of AbstractCvMat{T,N}\n\n\n\n"
},

{
    "location": "modules/core.html#CVCore.UMat",
    "page": "Core",
    "title": "CVCore.UMat",
    "category": "Type",
    "text": "UMat{T,N} represents cv::UMat with encoded type information\n\nT and N represents the element type and the dimension of Mat, respectively.\n\n\n\n"
},

{
    "location": "modules/core.html#CVCore.cvdepth-Tuple{Any}",
    "page": "Core",
    "title": "CVCore.cvdepth",
    "category": "Method",
    "text": "Determine cv::Mat depth from Julia type\n\n\n\n"
},

{
    "location": "modules/core.html#CVCore.handle",
    "page": "Core",
    "title": "CVCore.handle",
    "category": "Function",
    "text": "Returns a refrence of the interal structure\n\n\n\n"
},

{
    "location": "modules/core.html#CVCore.jltype-Tuple{Any}",
    "page": "Core",
    "title": "CVCore.jltype",
    "category": "Method",
    "text": "Determine julia type from the depth of cv::Mat\n\n\n\n"
},

{
    "location": "modules/core.html#Core.Type",
    "page": "Core",
    "title": "Core.Type",
    "category": "Type",
    "text": "Single-channel 2-dimentaionl mat constructor with user provided data\n\n\n\n"
},

{
    "location": "modules/core.html#Core.Type",
    "page": "Core",
    "title": "Core.Type",
    "category": "Type",
    "text": "Multi-channel 2-dimentaionl mat constructor with user provided data\n\n\n\n"
},

{
    "location": "modules/core.html#Core.Type-Tuple{Cxx.CppValue{Cxx.CxxQualType{Cxx.CppBaseType{Symbol(\"cv::Mat\")},(false,false,false)},N}}",
    "page": "Core",
    "title": "Core.Type",
    "category": "Method",
    "text": "Generic constructor\n\n\n\n"
},

{
    "location": "modules/core.html#Core.Type-Tuple{Int64,Int64,Int64}",
    "page": "Core",
    "title": "Core.Type",
    "category": "Method",
    "text": "Multi-chanel 2-dimentional mat constructor\n\n\n\n"
},

{
    "location": "modules/core.html#Core.Type-Tuple{Int64,Int64}",
    "page": "Core",
    "title": "Core.Type",
    "category": "Method",
    "text": "Single-channel 2-dimentional mat constructor\n\n\n\n"
},

{
    "location": "modules/core.html#Core.Type-Tuple{UMat}",
    "page": "Core",
    "title": "Core.Type",
    "category": "Method",
    "text": "Generic constructor\n\n\n\n"
},

{
    "location": "modules/core.html#Core.Type-Tuple{}",
    "page": "Core",
    "title": "Core.Type",
    "category": "Method",
    "text": "Empty mat constructor\n\n\n\n"
},

{
    "location": "modules/core.html#Reference-1",
    "page": "Core",
    "title": "Reference",
    "category": "section",
    "text": "Modules = [CVCore]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/imgproc.html#",
    "page": "ImgProc",
    "title": "ImgProc",
    "category": "page",
    "text": ""
},

{
    "location": "modules/imgproc.html#CVImgProc.jl-1",
    "page": "ImgProc",
    "title": "CVImgProc.jl",
    "category": "section",
    "text": "CVImgProc"
},

{
    "location": "modules/imgproc.html#Index-1",
    "page": "ImgProc",
    "title": "Index",
    "category": "section",
    "text": "Modules = [CVImgProc]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/imgproc.html#Reference-1",
    "page": "ImgProc",
    "title": "Reference",
    "category": "section",
    "text": "Modules = [CVImgProc]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/imgcodecs.html#",
    "page": "ImgCodecs",
    "title": "ImgCodecs",
    "category": "page",
    "text": ""
},

{
    "location": "modules/imgcodecs.html#CVImgCodecs.jl-1",
    "page": "ImgCodecs",
    "title": "CVImgCodecs.jl",
    "category": "section",
    "text": "CVImgCodecs"
},

{
    "location": "modules/imgcodecs.html#Index-1",
    "page": "ImgCodecs",
    "title": "Index",
    "category": "section",
    "text": "Modules = [CVImgCodecs]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/imgcodecs.html#Reference-1",
    "page": "ImgCodecs",
    "title": "Reference",
    "category": "section",
    "text": "Modules = [CVImgCodecs]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/videoio.html#",
    "page": "VideoIO",
    "title": "VideoIO",
    "category": "page",
    "text": ""
},

{
    "location": "modules/videoio.html#CVVideoIO.jl-1",
    "page": "VideoIO",
    "title": "CVVideoIO.jl",
    "category": "section",
    "text": "CVVideoIO"
},

{
    "location": "modules/videoio.html#Index-1",
    "page": "VideoIO",
    "title": "Index",
    "category": "section",
    "text": "Modules = [CVVideoIO]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/videoio.html#Reference-1",
    "page": "VideoIO",
    "title": "Reference",
    "category": "section",
    "text": "Modules = [CVVideoIO]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/highgui.html#",
    "page": "HighGUI",
    "title": "HighGUI",
    "category": "page",
    "text": ""
},

{
    "location": "modules/highgui.html#CVHighGUI.jl-1",
    "page": "HighGUI",
    "title": "CVHighGUI.jl",
    "category": "section",
    "text": "CVHighGUI"
},

{
    "location": "modules/highgui.html#Index-1",
    "page": "HighGUI",
    "title": "Index",
    "category": "section",
    "text": "Modules = [CVHighGUI]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/highgui.html#Reference-1",
    "page": "HighGUI",
    "title": "Reference",
    "category": "section",
    "text": "Modules = [CVHighGUI]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/calib3d.html#",
    "page": "Calib3d",
    "title": "Calib3d",
    "category": "page",
    "text": ""
},

{
    "location": "modules/calib3d.html#CVCalib3d.jl-1",
    "page": "Calib3d",
    "title": "CVCalib3d.jl",
    "category": "section",
    "text": "CVCalib3d"
},

{
    "location": "modules/calib3d.html#Index-1",
    "page": "Calib3d",
    "title": "Index",
    "category": "section",
    "text": "Modules = [CVCalib3d]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/calib3d.html#Reference-1",
    "page": "Calib3d",
    "title": "Reference",
    "category": "section",
    "text": "Modules = [CVCalib3d]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/libopencv.html#",
    "page": "LibOpenCV",
    "title": "LibOpenCV",
    "category": "page",
    "text": ""
},

{
    "location": "modules/libopencv.html#LibOpenCV",
    "page": "LibOpenCV",
    "title": "LibOpenCV",
    "category": "Module",
    "text": "A special package that manages opencv binary depedencies\n\nPkg.build(\"LibOpenCV\")\n\ntry to search your system opencv libraries and its dependencies, and throws errors if any issues. If opencv librarires are not found, it will install fresh opencv libraries into deps directrory, but not recommended unless if you have perfect requiremsnts to build opencv.\n\n\n\n"
},

{
    "location": "modules/libopencv.html#LibOpenCV.jl-1",
    "page": "LibOpenCV",
    "title": "LibOpenCV.jl",
    "category": "section",
    "text": "LibOpenCV"
},

{
    "location": "modules/libopencv.html#Index-1",
    "page": "LibOpenCV",
    "title": "Index",
    "category": "section",
    "text": "Modules = [LibOpenCV]\nOrder = [:constant, :function, :type, :macro]"
},

{
    "location": "modules/libopencv.html#LibOpenCV.find_library_e",
    "page": "LibOpenCV",
    "title": "LibOpenCV.find_library_e",
    "category": "Function",
    "text": "find_library_e(mod)\nfind_library_e(mod, libdirs)\nfind_library_e(mod, libdirs, ext)\n\n\nIt tries to search the specified library by name. Not exported, but meant to be used by other opencv packages.\n\nParameters\n\nmod : Module name\nlibdirs : library seach directries (default is dir of libopencv_highgui)\next : library extention name (e.g. .so)\n\nRetures\n\nlibpath : library path if found, othrewise return C_NULL\n\nExamples\n\nFrom the CVHighGUI.jl package,\n\nlibopencv_highgui = LibOpenCV.find_library_e(\"libopencv_highgui\")\ntry\n    Libdl.dlopen(libopencv_highgui, Libdl.RTLD_GLOBAL)\ncatch e\n    warn(\"You might need to set DYLD_LIBRARY_PATH to load dependencies proeprty.\")\n    rethrow(e)\nend\n\n\n\n"
},

{
    "location": "modules/libopencv.html#Reference-1",
    "page": "LibOpenCV",
    "title": "Reference",
    "category": "section",
    "text": "Modules = [LibOpenCV]\nOrder = [:constant, :function, :type, :macro]"
},

]}
