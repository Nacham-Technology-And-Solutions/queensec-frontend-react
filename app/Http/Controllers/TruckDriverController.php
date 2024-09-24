<?php

namespace App\Http\Controllers;

use App\Models\TruckDriver;
use Illuminate\Http\Request;

class TruckDriverController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $truckDrivers = TruckDriver::paginate(10);
  
        return view('Truck_Drivers.index', compact('truckDrivers'));
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('truck_drivers.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:truck_drivers',
            'phone_number' => 'nullable|string|max:20',
        ]);
    
        TruckDriver::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phone_number' => $request->input('phone_number'),
        ]);
    
        TruckDriver::create($request->all());

        return redirect()->route('Truck_Drivers.index')->with('success', 'Truck driver added successfully!');
    }
    

    /**
     * Display the specified resource.
     */
    public function show(TruckDriver $truckDriver)
    {
      
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $truckDriver = TruckDriver::findOrFail($id); // Fetch the truck driver by ID
        return view('truck_drivers.edit', compact('truckDriver')); // Pass the truck driver to the edit view
    }
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TruckDriver $truckDriver)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:truck_drivers,email,' . $truckDriver->id,
            'phone_number' => 'nullable|string|max:20',
            'truck_details' => 'nullable|string|max:255',
        ]);
    
        $truckDriver->update($request->all());
    
        return redirect()->route('truck_drivers.index')->with('success', 'Truck driver updated successfully!');
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TruckDriver $truckDriver)
    {
        $truckDriver->delete();
        return redirect()->route('truck_drivers.index')->with('success', 'Truck driver deleted successfully!');
    }
    
}
