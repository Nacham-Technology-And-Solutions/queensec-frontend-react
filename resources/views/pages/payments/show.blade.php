@extends('layouts.backend')

@section('content')
    <div class="content">
        <!-- Quick Actions -->
        {{-- <div class="row">
            <div class="col-6">
                <a class="block block-rounded block-link-shadow text-center" href="{{ route('payments.edit', $payment->id) }}">
                    <div class="block-content block-content-full">
                        <div class="fs-2 fw-semibold text-dark">
                            <i class="fa fa-pencil-alt"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-muted mb-0">
                            Edit Order
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6">
                <form name="xdfx" action="{{ route('payments.destroy', $payment->id) }}" method="POST"
                    style="display:inline;">
                    @csrf
                    @method('DELETE')
                    <a onclick="document.xdfx.submit();" href="javascript:void(0)"
                        class="block block-rounded block-link-shadow text-center">
                        <div class="block-content block-content-full">
                            <div class="fs-2 fw-semibold text-danger">
                                <i class="fa fa-times"></i>
                            </div>
                        </div>
                        <div class="block-content py-2 bg-body-light">
                            <p class="fw-medium fs-sm text-danger mb-0">
                                Remove Order
                            </p>
                        </div>
                    </a>
                </form>
            </div>
        </div> --}}
        <!-- END Quick Actions -->

        <!-- User Info -->
        <div class="block block-rounded">
            <div class="block-content text-center">
                <div class="py-4">
                    <div class="mb-3">
                        <img class="img-avatar" src="{{ asset($payment->payee()->image_url) }}" alt="">
                    </div>
                    <h1 class="fs-lg mb-0">
                        <span>{{ $payment->name }}</span>
                    </h1>
                    <p class="fs-sm fw-medium text-muted">{{ $payment->payee()->name() }}<br>
                        {{ $payment->payee()->userType() }} Account</p>
                </div>
            </div>
            {{-- <div class="block-content bg-body-light text-center">
                <div class="row items-push text-uppercase">
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Payer</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($payment->orders()) }}</a>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Payee</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">₦{{ count($payment->tickets()) }}</a>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Mineral</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($payment->orders()) }}</a>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="fw-semibold text-dark mb-1">Payments</div>
                        <a class="link-fx fs-3 text-primary" href="javascript:void(0)">{{ count($payment->payments()) }}</a>
                    </div>
                </div>
            </div> --}}
        </div>
        <!-- END User Info -->

        <!-- Quick Overview -->
        <div class="row">
            <div class="col-6 col-lg-3">
                <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                        <div class="item item-circle bg-info-light mx-auto">
                            <i class="fa fa-barcode text-info"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-info mb-0">
                            Payment #{{ $payment->id }}
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6 col-lg-3">
                <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                        <div class="item item-circle bg-info-light mx-auto">
                            <i class="fa fa-car text-info"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-info mb-0">
                            Hauler #{{ $payment->hauler()->id }}
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6 col-lg-3">
                <a class="block block-rounded block-link-shadow text-center" href="javascript:void(0)">
                    <div class="block-content block-content-full">
                        <div class="item item-circle bg-warning-light mx-auto">
                            <i class="fa fa-dollar text-warning"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm text-warning mb-0">
                            {{ $payment->payment_method }} Payment
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-6 col-lg-3">
                <a class="block block-rounded block-link-shadow text-center" href=" javascript:void(0) ">
                    {{-- href="{{ $payment->ticketIssued() ? route('tickets.show') : 'javascript:void(0)' }}"> --}}
                    <div class="block-content block-content-full">
                        <div class="item item-circle   {{ $payment->ticketIssued() ? 'bg-success-light' : 'bg-body' }} mx-auto">
                            <i class="fa fa-ticket  {{ $payment->ticketIssued() ? 'text-success' : 'text-muted' }}"></i>
                        </div>
                    </div>
                    <div class="block-content py-2 bg-body-light">
                        <p class="fw-medium fs-sm mb-0 {{ $payment->ticketIssued() ? 'text-success' : 'text-muted' }}">
                            {{ $payment->ticketIssued() ? 'Ticket #' . $payment->ticket()->id : 'Ticket Not Issued' }}
                        </p>
                    </div>
                </a>
            </div>
        </div>
        <!-- END Quick Overview -->

        <!-- Customer -->
        {{-- <div class="row">
            <div class="col-sm-6">
                <!-- Billing Address -->
                <div class="block block-rounded">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">Billing Address</h3>
                    </div>
                    <div class="block-content">
                        <div class="fs-4 mb-1">John Parker</div>
                        <address class="fs-sm">
                            Sunset Str 598<br>
                            Melbourne<br>
                            Australia, 11-671<br><br>
                            <i class="fa fa-phone"></i> (999) 888-77777<br>
                            <i class="fa fa-envelope-o"></i> <a href="javascript:void(0)">company@example.com</a>
                        </address>
                    </div>
                </div>
                <!-- END Billing Address -->
            </div>
            <div class="col-sm-6">
                <!-- Shipping Address -->
                <div class="block block-rounded">
                    <div class="block-header block-header-default">
                        <h3 class="block-title">Shipping Address</h3>
                    </div>
                    <div class="block-content">
                        <div class="fs-4 mb-1">John Parker</div>
                        <address class="fs-sm">
                            Sunrise Str 620<br>
                            Melbourne<br>
                            Australia, 11-587<br><br>
                            <i class="fa fa-phone"></i> (999) 888-55555<br>
                            <i class="fa fa-envelope-o"></i> <a href="javascript:void(0)">company@example.com</a>
                        </address>
                    </div>
                </div>
                <!-- END Shipping Address -->
            </div>
        </div> --}}
        <!-- END Customer -->

        {{-- <!-- Log Messages -->
        <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title">Order Log</h3>
            </div>
            <div class="block-content">
                <table class="table table-borderless table-striped table-vcenter fs-sm">
                    <tbody>
                        @foreach ($payment->histories() as $history)
                            <tr>
                                @php
                                    $logType = 'bg-primary';
                                    if ($history->action) {
                                        # code...
                                    }
                                @endphp
                                <td class="fs-base" style="width: 80px;">
                                    <span class="badge bg-primary">{{ $history->action }}</span>
                                </td>
                                <td style="width: 220px;">
                                    <span
                                        class="fw-semibold">{{ date('d/m/Y - h:m', strtotime($history->created_at)) }}</span>
                                </td>
                                <td>
                                    <a href="javascript:void(0)">{{ $history->changedBy()->name() }}</a>
                                </td>
                                <td class="text-">{{ $history->status }}</td>
                            </tr>
                        @endforeach

                    </tbody>
                </table>
            </div>
        </div>
        <!-- END Log Messages --> --}}

    </div>
    <!-- END Page Content -->
@endsection
