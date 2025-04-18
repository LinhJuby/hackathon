import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const initialPredictions = [
  { id: 1, name: "Team Alpha" },
  { id: 2, name: "Team Bravo" },
  { id: 3, name: "Team Charlie" },
  { id: 4, name: "Team Delta" },
  { id: 5, name: "Team Echo" },
  { id: 6, name: "Team Foxtrot" },
  { id: 7, name: "Team Gamma" },
  { id: 8, name: "Team Helix" },
  { id: 9, name: "Team Inferno" },
  { id: 10, name: "Team Jupiter" },
];

export default function HackathonPrediction() {
  const [winner, setWinner] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = () => {
    if (winner) {
      setConfirmed(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">?? Hackathon Prediction Admin</h1>

      {!confirmed ? (
        <Card className="mb-6">
          <CardContent className="p-4">
            <label className="block font-medium mb-2">Ch?n team d? doán s? chi?n th?ng:</label>
            <select
              className="w-full p-2 border rounded mb-4"
              value={winner}
              onChange={(e) => setWinner(e.target.value)}
            >
              <option value="">-- Ch?n team --</option>
              {initialPredictions.map((team) => (
                <option key={team.id} value={team.name}>
                  {team.name}
                </option>
              ))}
            </select>
            <Button onClick={handleSubmit}>Xác nh?n d? doán</Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-4">
            <p className="text-lg font-semibold text-green-600 mb-2">? D? doán dã du?c luu!</p>
            <p className="text-md">Team chi?n th?ng du?c d? doán: <strong>{winner}</strong></p>
          </CardContent>
        </Card>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Danh sách các team:</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>STT</TableHead>
              <TableHead>Tên Team</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialPredictions.map((team) => (
              <TableRow key={team.id}>
                <TableCell>{team.id}</TableCell>
                <TableCell>{team.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
