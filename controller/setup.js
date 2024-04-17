const movies = require('../models/moviesschema')
exports.newMovie = async (req,res) =>{
    try{
        const {title,year,runtime,genres,director,actors,plot,posterurl} = req.body;
        const isValid = await movies.findOne({title});
        if(isValid){
            return res.status(400).json({
                success:false,
                message:"Movie already exists"
            });
        }
        const newmovies = await movies.create({
            title,year,runtime,genres,director,actors,plot,posterurl
        })
        return res.status(200).json({
            success:true,
            message:"Movie added successfully",
            newmovies
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Error Please try again later!"
        })
    }
}


exports.deleteMovie = async (req,res) =>{
    try{
        const {title} = req.body;
        const isValid = await movies.findOne({title});
        if(!isValid){
            return res.status(400).json({
                success:false,
                message:"Movie doesn't exists"
            });
        }
        const deletemovie = await movies.findOneAndDelete(title);
        return res.status(200).json({
            success:true,
            message:"Movie Deleted successfully",
            deletemovie
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Error Please try again later!"
        })
    }
}


exports.deleteMovieById = async (req,res) =>{
    try{
        const {id} = req.params;
        const isValid = await movies.findOne({_id:id});
        if(!isValid){
            return res.status(400).json({
                success:false,
                message:"Movie doesn't exists with this id"
            });
        }
        const deletemovie = await movies.findOneAndDelete({ _id: id});
        return res.status(200).json({
            success:true,
            message:"Movie Deleted successfully",
            deletemovie
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Error Please try again later!"
        })
    }
}

exports.getMovie = async (req,res) =>{
    try{
        const {title} = req.body;
        const isValid = await movies.findOne({title});
        if(!isValid){
            return res.status(400).json({
                success:false,
                message:"Movie doesn't exists"
            });
        }
        return res.status(200).json({
            success:true,
            message:"Movie fetched successfully",
            isValid
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Error Please try again later!"
        })
    }
}

exports.getMovieById = async (req,res) =>{
    try{
        const {id} = req.params;
        const isValid = await movies.findOne({_id:id});
        if(!isValid){
            return res.status(400).json({
                success:false,
                message:"Movie doesn't exists"
            });
        }
        return res.status(200).json({
            success:true,
            message:"Movie fetched successfully",
            isValid
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Error Please try again later!"
        })
    }
}

exports.updateMovie = async (req,res) =>{
    try{
        const {title,newtitle} = req.body;
        const isValid = await movies.findOneAndUpdate({title});
        if(!isValid){
            return res.status(400).json({
                success:false,
                message:"Movie doesn't exists"
            });
        }
        isValid.title = newtitle
        return res.status(200).json({
            success:true,
            message:"Movie updated successfully",
            isValid
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Error Please try again later!"
        })
    }
}

exports.updateMovieById = async (req,res) =>{
    try{
        const {id} = req.params;
        const {newtitle} = req.body;
        const isValid = await movies.findOne({_id:id});
        if(!isValid){
            return res.status(400).json({
                success:false,
                message:"Movie doesn't exists"
            });
        }
        isValid.title = newtitle;
        await isValid.save();
        return res.status(200).json({
            success:true,
            message:"Movie updated successfully",
            isValid
        })
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Error Please try again later!"
        })
    }
}



