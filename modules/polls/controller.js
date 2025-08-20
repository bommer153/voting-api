import { Poll } from './model.js';

export async function getAll(req, res) {
  const allPolls = await Poll.find();

  res.json({
    data: allPolls,
  });
}

// Add more logic
export async function create(req, res) {
  // GET all fields needed from req.body
  // ATTEMPT to save
  // HANDLE error
  // RESPONSE created status with poll
  res.status(201).json({
    success: 'Successfully created poll',
    // newly add poll
  });
}

export async function getOne(req, res) {
  // FIND poll from req.params
  // IF NON then response 404
  // OTHERWISE response the poll
  res.json({
    success: 'Successfully get one poll',
    // find poll
  });
}
