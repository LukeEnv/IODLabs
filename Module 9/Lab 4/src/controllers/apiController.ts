import { Request, Response } from "express";
import { fetchMatches, fetchMatchById } from "../services/apiService";

export const getMatches = async (req: Request, res: Response) => {
  try {
    const year = parseInt(req.query.year as string) || new Date().getFullYear();
    const matches = await fetchMatches(year);
    res.status(200).json(matches);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getMatchById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const match = await fetchMatchById(id);
    res.status(200).json(match);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
