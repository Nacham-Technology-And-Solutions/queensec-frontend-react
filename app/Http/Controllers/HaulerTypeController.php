<?php

namespace App\Http\Controllers;

use App\Models\HaulerType;
use Illuminate\Http\Request;

class HaulerTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $haulers = HaulerType::all();
        return view(
            'pages.haulers.index',
            [
                'haulers' => $haulers,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view(
            'pages.haulers.create'
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $form_field =  $request->validate([
            'name' => ['required', 'string'],
            'volume' => ['required', 'string'],
            'description' => ['required', 'string'],
            'img' => ['string'],
        ]);

        $hauler = HaulerType::create($form_field);

        return back()->with('message', 'Hauler Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $hauler = HaulerType::find($id);

        return view(
            'pages.haulers.show',
            [
                'hauler' => $hauler,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $hauler = HaulerType::find($id);

        return view(
            'pages.haulers.edit',
            [
                'hauler' => $hauler,
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $hauler = HaulerType::find($id);

        $form_field =  $request->validate([
            'name' => ['required', 'string'],
            'volume' => ['required', 'string'],
            'description' => ['required', 'string'],
            'img' => ['string'],
        ]);

        $hauler->update($form_field);

        return back()->with('message', 'Hauler Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $hauler = HaulerType::find($id);
        $hauler->delete();

        return redirect()->route('haulers.index')->with('message', 'Hauler Type #' . $hauler->id . ','. $hauler->name . ', Successfully Deleted from the Database.');
    }

    /**
     * Enable a specific User
     */
    public function enable(int $id)
    {
        $hauler = HaulerType::find($id);
        $hauler->update([
            'active' => 1
        ]);

        return back()->with('message', 'Hauler Enabled');
    }

    /**
     * Disable a specific User
     */
    public function disable(int $id)
    {
        $hauler = HaulerType::find($id);
        $hauler->update([
            'active' => 0
        ]);

        return back()->with('message', 'Hauler Disabled');
    }
}
