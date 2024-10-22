<?php

namespace App\Http\Controllers;

use App\Models\LocLocality;
use App\Models\LocState;
use Illuminate\Http\Request;

class LocationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $locStates = LocState::all();
        $locLocalities = LocLocality::all();
        return view(
            'pages.locations.index',
            [
                'locStates' => $locStates,
                'locLocalities' => $locLocalities,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view(
            'pages.locations.create'
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function createLocality(string $id)
    {
        $locStates = LocState::all(); 
        return view(
            'pages.locations.localityCreate',
            [
                'locStates' => $locStates,
                'selectedState' => $id
            ]
        ); 
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $form_field =  $request->validate([
        //     'locType' => ['required', 'string'],

        //     'loc_state_name' => ['string'],
        //     'loc_state_code' => ['string'],
        //     'loc_state_id' => ['string'],

        //     'loc_locality_name' => ['string'],
        //     'loc_locality_code' => ['string'],
        // ]);
        $type = $request->validate([
            'locType' => ['required', 'string']
        ])['locType'];

        $msg = "Ops Nothing Registered";
         
        if ($type == "state") {
            $form_field =  $request->validate([
                'loc_state_name' => ['required','string'],
                'loc_state_code' => ['required','string'],
            ]);

            $locState = LocState::create(
                [
                    "name" => $form_field['loc_state_name'],
                    "code" => $form_field['loc_state_code'],
                ]
            );

            $msg = "State Registered Successfully";
            return back()->with('message', $msg);
        } else 
        if ($type == "locality") {

            $form_field =  $request->validate([
                'loc_state_id' => ['required','string'],    
                'loc_locality_name' => ['required','string'],
                'loc_locality_code' => ['required','string'],
            ]);

            $locLocality = LocLocality::create(
                [
                    "name" => $form_field['loc_locality_name'],
                    "code" => $form_field['loc_locality_code'],
                    "locstate_id" => $form_field['loc_state_id'],
                ]
            );

            $msg = "Locality Registered Successfully";
            return back()->with('message', $msg);
        }
        return back()->with('error', $msg);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $locState = LocState::find($id);
        $locLocalities = LocLocality::where("locstate_id", "=", $locState->id);

        return view(
            'pages.locations.show',
            [
                'locState' => $locState,
                'locLocalities' => $locLocalities,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $locState = LocState::find($id);
        $locLocalities = LocLocality::where("locstate_id", "=", $locState->id);

        return view(
            'pages.locations.edit',
            [
                'locState' => $locState,
                'locLocalities' => $locLocalities,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function editLocality(string $id)
    { 
        $locLocality = LocLocality::find($id);

        return view(
            'pages.locations.localityEdit',
            [ 
                'locLocality' => $locLocality,
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $form_field =  $request->validate([
            'locType' => ['required', 'string'],

            'name' => ['required', 'string'],
            'code' => ['required', 'string'],
            'loc_state_id' => ['string'],
        ]);

        $data = [
            "name" => $form_field['name'],
            "code" => $form_field['code'],
        ];

        $dataToUpdate = null;

        if ($form_field['locType'] == "state") {
            $dataToUpdate = LocState::find($id);
            $msg = "State Registered Successfully";
        } else 
        if ($form_field['locType'] == "locality") {
            $dataToUpdate = LocLocality::find($id);
            $data['loc_state_id'] = $form_field['loc_state_id'];
            $msg = "Locality Registered Successfully";
        }

        $dataToUpdate->update($data);

        return back()->with('message', $msg);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $locType = $request->query('locType');
        $dataToDelete = null;
        $msg = 'Ops';

        if ($locType == "state") {
            $dataToDelete = LocState::find($id); 
            $msg = 'State #' . $dataToDelete->id . ',' . $dataToDelete->name . ', Successfully Deleted from the Database.';
        } else 
        if ($locType == "locality") {
            $dataToDelete = LocLocality::find($id); 
            $msg = 'Locality #' . $dataToDelete->id . ',' . $dataToDelete->name . ', Successfully Deleted from the Database.';
        }
 
        $dataToDelete->delete();

        return redirect()->route('locations.index')->with('message', $msg);
    }

    /**
     * Enable a specific Location 
     */
    public function enable(Request $request, int $id)
    {
        // dd(request());
        $locType = $request->query('locType');
        $dataToPatch = null;
        $msg = 'Ops';

        if ($locType == "state") {
            $dataToPatch = LocState::find($id); 
            $msg = 'State #' . $dataToPatch->id . ',' . $dataToPatch->name . ', Enabled in the Database.';
        } else 
        if ($locType == "locality") {
            $dataToPatch = LocLocality::find($id); 
            $msg = 'Locality #' . $dataToPatch->id . ',' . $dataToPatch->name . ', Enabled in the Database.';
        }
  
        $dataToPatch->update([
            'active' => 1
        ]);

        return back()->with('message', $msg);
    }

    /**
     * Disable a specific Location 
     */
    public function disable(Request $request, int $id)
    {
        $locType = $request->query('locType');
        $dataToPatch = null;
        $msg = 'Ops';

        if ($locType == "state") {
            $dataToPatch = LocState::find($id); 
            $msg = 'State #' . $dataToPatch->id . ',' . $dataToPatch->name . ', Disabled in the Database.';
        } else 
        if ($locType == "locality") {
            $dataToPatch = LocLocality::find($id); 
            $msg = 'Locality #' . $dataToPatch->id . ',' . $dataToPatch->name . ', Disabled in the Database.';
        }
  
        $dataToPatch->update([
            'active' => 0
        ]);

        return back()->with('message', $msg); 
    }
}
