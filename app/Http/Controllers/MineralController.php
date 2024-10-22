<?php

namespace App\Http\Controllers;

use App\Models\Mineral;
use Illuminate\Http\Request;

class MineralController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $minerals = Mineral::all();
        return view(
            'pages.minerals.index',
            [
                'minerals' => $minerals,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view(
            'pages.minerals.create'
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $form_field =  $request->validate([
            'name' => ['required', 'string'],
            'advalorem' => ['required', 'int'],
            'market_value' => ['required', 'decimal:0,2'],
            'royalty_rate' => ['required', 'decimal:0,2'],
            'measurement_unit' => ['required', 'string'],
            'description' => ['string'],
            'img' => ['string']
        ]);

        $mineral = Mineral::create($form_field);

        return back()->with('message', 'Mineral Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $mineral = Mineral::find($id);

        return view(
            'pages.minerals.show',
            [
                'mineral' => $mineral,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $mineral = Mineral::find($id);

        return view(
            'pages.minerals.edit',
            [
                'mineral' => $mineral,
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $mineral = Mineral::find($id);

        $form_field =  $request->validate([
            'name' => ['required', 'string'],
            'advalorem' => ['required', 'int'],
            'market_value' => ['required', 'decimal:0,2'],
            'royalty_rate' => ['required', 'decimal:0,2'],
            'measurement_unit' => ['required', 'string'],
            'description' => ['string'],
            'img' => ['string']
        ]);

        $mineral->update($form_field);

        return back()->with('message', 'Mineral Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $mineral = Mineral::find($id);
        $mineral->delete();

        return redirect()->route('minerals.index')->with('message', 'Mineral Type #' . $mineral->id . ',' . $mineral->name . ', Successfully Deleted from the Database.');
    }

    /**
     * Enable a specific Mineral
     */
    public function enable(int $id)
    {
        $mineral = Mineral::find($id);
        $mineral->update([
            'active' => 1
        ]);

        return back()->with('message', 'Mineral Enabled');
    }

    /**
     * Disable a specific Mineral
     */
    public function disable(int $id)
    {
        $mineral = Mineral::find($id);
        $mineral->update([
            'active' => 0
        ]);

        return back()->with('message', 'Mineral Disabled');
    }
}
