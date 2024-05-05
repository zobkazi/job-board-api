// Import necessary modules
import express from "express";
import District from "@/models/District";

const getDistrictsByDivionId = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const divisionId = req.params.id;

    console.log(divisionId);

    const district = await District.find({ division: divisionId });

    res.status(200).json(district.map((d) => d.toObject()));

    // Query the database for districts with the specified division ID
  } catch (err) {
    console.error("Error fetching districts:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default getDistrictsByDivionId;
