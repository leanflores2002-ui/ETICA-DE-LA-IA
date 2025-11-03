import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getStatusList, createStatus } from "@/lib/api";

export default function StatusDemo() {
  const [clientName, setClientName] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const showDemo = useMemo(() => {
    // Always show, but keep component minimal and non-intrusive
    return true;
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await getStatusList();
        if (mounted) setItems(data || []);
      } catch (e) {
        if (!mounted) return;
        setError("No se pudo obtener el estado inicial del backend.");
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!clientName.trim()) return;
    setLoading(true);
    setError("");
    try {
      const created = await createStatus(clientName.trim());
      setItems((prev) => [created, ...prev]);
      setClientName("");
    } catch (e) {
      setError("No se pudo crear el registro. Verifica el backend.");
    } finally {
      setLoading(false);
    }
  };

  if (!showDemo) return null;

  return (
    <div className="mt-8">
      <Card>
        <CardHeader>
          <CardTitle>Demo: Estado de clientes</CardTitle>
          <CardDescription>
            Crea un registro y visualiza la lista desde FastAPI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="flex gap-2 mb-4">
            <Input
              placeholder="Nombre del cliente"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Guardando..." : "Crear"}
            </Button>
          </form>

          {error && (
            <div className="text-red-600 text-sm mb-3">{error}</div>
          )}

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Fecha</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((it) => (
                <TableRow key={it.id}>
                  <TableCell className="font-mono text-xs">{it.id}</TableCell>
                  <TableCell>{it.client_name}</TableCell>
                  <TableCell>
                    {typeof it.timestamp === "string"
                      ? new Date(it.timestamp).toLocaleString()
                      : new Date(it.timestamp).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
              {items.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="text-muted-foreground">
                    Sin registros todavía.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

