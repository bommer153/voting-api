import { Poll } from './model.js';

export async function getAll(req, res) {
  const allPolls = await Poll.find();

  res.json({
    data: allPolls,
  });
}

// Add more logic
export async function create(req, res) {
  try{
    const { question, options, status } = req.body;
    const poll = new Poll({
      question,
      options,
      status, 
    });

    await poll.save();
    res.status(201).json({
        success: 'Successfully created poll',        
      });

  }catch(error){
   res.status(400).json({  
      message: "Failed to create poll",
      error: error,
    });  
  }

 
}

export async function getOne(req, res) {  
  try{
    const { id } = req.params;
    const poll = await Poll.findById(id);

    res.status(200).json({
      data: poll,
    });

  }catch(error){
    res.status(404).json({
      message: "Failed to find data",
      error : error,
    })
  }
  res.json({
    success: 'Successfully get one poll',   
  });
}
